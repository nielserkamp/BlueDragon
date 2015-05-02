package org.hackathon.bluedragon;

import java.util.List;
import java.util.UUID;

import android.app.Activity;
import android.os.Bundle;
import android.view.WindowManager.LayoutParams;
import android.webkit.WebView;
import android.widget.Toast;

import com.movin.core.data.beacon.BeaconIdentifier;
import com.movin.core.utils.TimingProvider;
import com.movin.proximity.MovinProximityEngine;
import com.movin.proximity.MovinProximityEvent;
import com.movin.proximity.MovinProximityListener;
import com.movin.sdk.MovinSDK;
import com.movin.sdk.MovinSDKCallback;
import com.movin.trigger.BeaconFilter;
import com.movin.trigger.BeaconFilterType;

public class MainActivity extends Activity implements MovinSDKCallback,
		MovinProximityListener {

	private WebView screen;
	private MovinProximityEngine proximity;

	private BeaconFilter filter;
	private MovinProximityEvent current;

	public MainActivity() {
		filter = new BeaconFilter(
				BeaconFilterType.ONLY_INCLUDE_FILTERED_BEACONS);
		int[] minors = new int[] { 431, 365, 318, 735, 556, 744, 944, 794, 418,
				550, 828, 388, 300, 993, 435, 606, 222, 264, 35, 753, 916, 902,
				262, 190, 530, 706, 250, 189, 140, 377, 481, 203, 323, 670, 978 };
		for (int minor : minors) {
			filter.addBeaconIdentifier(new BeaconIdentifier(UUID
					.fromString("f7826da6-4fa2-4e98-8024-bc5b71e0893e"), 1624,
					minor));
		}
	}

	@Override
	@SuppressWarnings("deprecation")
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		screen = new WebView(this);
		screen.setLayoutParams(new LayoutParams(LayoutParams.FILL_PARENT,
				LayoutParams.FILL_PARENT));
		screen.getSettings().setJavaScriptEnabled(true);

		setContentView(screen);

		screen.loadUrl("file:///android_asset/index.html");

		MovinSDK.initialize("movin", "5544737a279cb08aa318191d", this, this);
	}

	
	@Override
	public void initialized(boolean success, Exception ex) {
		if (success) {

			try {
				this.proximity = MovinSDK.createProximityEngine();
				this.proximity.addProximityListener(this);
				this.proximity.start();

				showToast("initialized", true);

			} catch (Exception e) {
				showToast(e.getLocalizedMessage(), false);
			}

		} else {

			showToast("Error: " + ex.getLocalizedMessage(), false);
			ex.printStackTrace();

		}
	}

	@Override
	protected void onPause() {
		if (this.proximity != null)
			this.proximity.stop();
		super.onPause();
	}

	@Override
	public void onProximityUpdate(List<MovinProximityEvent> updates) {

		List<MovinProximityEvent> filtered = this.filter.applyFilter(updates);

		MovinProximityEvent closestBeacon = null;
		for (MovinProximityEvent e : filtered) {
			if(e.distance == -1)
				continue;
			if (closestBeacon == null || e.distance < closestBeacon.distance) {
				closestBeacon = e;
			}
		}
		if (closestBeacon == null) {
			return;
		}
		if(current == null) {
			current = closestBeacon;
		}
		
		if(closestBeacon.distance < 8) {
			current = closestBeacon;
		}
		
		long time = TimingProvider.getInstance().getTime() - prev;
		prev = TimingProvider.getInstance().getTime();
		
		//showToast("closest beacon: " + current.beacon.getMinor() + " range: " + current.distance + " time: " + time, true);
	}

	long prev = 0;
	private void callJavascript(String javascript) {
		screen.loadUrl("javascript:" + javascript);
	}

	public void showToast(final String text, final boolean shortTime) {
		runOnUiThread(new Runnable() {

			@Override
			public void run() {
				Toast.makeText(MainActivity.this, text,
						shortTime ? Toast.LENGTH_SHORT : Toast.LENGTH_LONG)
						.show();
			}
		});
	}
}
