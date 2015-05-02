package org.hackathon.bluedragon;

import android.app.Activity;
import android.os.Bundle;
import android.view.WindowManager.LayoutParams;
import android.webkit.WebView;


public class MainActivity extends Activity {
	
	WebView screen;

    @Override @SuppressWarnings("deprecation")
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        screen = new WebView(this);
        screen.setLayoutParams(new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT));
        
        setContentView(screen);
        
        screen.loadUrl("file:///android_asset/index.html");
    }
}
