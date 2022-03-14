package github.funnyzak.v2ex;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen; // react-native-splash-screen

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "app";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // react-native-splash-screen

    // custom theme
    SplashScreen.show(this, R.style.SplashScreenTheme, false);

    // SplashScreen.show(this, false);
    super.onCreate(savedInstanceState);
  }
}
