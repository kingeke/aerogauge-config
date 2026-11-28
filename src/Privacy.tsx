const updated = '27 November 2026'
const contact = 'https://github.com/kingeke/aerogauge-config/issues'

export default function Privacy() {
  return (
    <main className="prose">
      <header>
        <a className="logo" href="../">✈</a>
        <div>
          <h1>AeroGauge</h1>
          <p className="sub">Privacy policy · last updated {updated}</p>
        </div>
      </header>

      <section className="card summary">
        <h2>In short</h2>
        <ul>
          <li>Your location, journeys and places stay on your phone. We never receive them.</li>
          <li>No account, no ads, no analytics, no tracking.</li>
          <li>The camera view is only shown on screen. Nothing is recorded or uploaded.</li>
          <li>Maps are loaded from a map provider, which sees which map area your phone asks for.</li>
          <li>"Search online" sends only the words you type to a search service.</li>
        </ul>
      </section>

      <section className="card">
        <h2>Who we are</h2>
        <p>
          This policy covers the AeroGauge app for Android and iOS (package <code>com.aeroguage.android</code>,
          bundle <code>com.aeroguage.ios</code>), a GPS speedometer and journey tracker. "We" means the developer of
          AeroGauge.
        </p>
      </section>

      <section className="card">
        <h2>What the app uses and why</h2>
        <h3>Location (precise)</h3>
        <p>
          Used to show your speed, altitude, heading and GPS signal, and to draw your route. While you record a
          journey, the app keeps using location with a visible notification, so it can track you with the screen
          off. It does not use location in the background at any other time.
        </p>
        <h3>Camera</h3>
        <p>
          Used only by the Sky finder, to show satellites over the live camera view. The image is shown on your
          screen and is never saved, recorded or sent anywhere.
        </p>
        <h3>Motion sensors and compass</h3>
        <p>Used on the phone to point the compass and the Sky finder. These readings are not stored or sent.</p>
        <h3>Notifications</h3>
        <p>Used to show the live journey notification while a journey is recording.</p>
      </section>

      <section className="card">
        <h2>What is stored, and where</h2>
        <p>Everything below is stored only in the app's storage on your phone:</p>
        <ul>
          <li>Journeys you record: route points, speeds, altitudes, times and GPS signal quality.</li>
          <li>Places you search for, use or save.</li>
          <li>Your settings, including a MapTiler key if you enter one.</li>
          <li>Map tiles saved for offline use.</li>
        </ul>
        <p>
          We do not run a server that receives this data, and the app has no account or sign-in. If your phone's own
          backup (Google or iCloud backup) is turned on, the operating system may include this app data in your
          personal backup. That backup is handled by Google or Apple under their policies, and we cannot access it.
        </p>
      </section>

      <section className="card">
        <h2>What leaves your phone</h2>
        <h3>Map tiles</h3>
        <p>
          To draw maps, the app downloads map images from a map provider: OpenStreetMap
          (<a href="https://osmfoundation.org/wiki/Privacy_Policy">privacy policy</a>), OpenFreeMap
          (<a href="https://openfreemap.org/privacy/">privacy policy</a>), or MapTiler if you entered your own key
          (<a href="https://www.maptiler.com/privacy-policy/">privacy policy</a>). Like any website, the provider
          receives your IP address and the map area being shown, which can reveal your approximate location. The
          app does not send your GPS position, journeys or any identifier to them.
        </p>
        <h3>Online place search</h3>
        <p>
          Searching for airports and cities happens on your phone. If you tap "Search online", the text you typed
          is sent to Photon, a search service run by komoot using OpenStreetMap data
          (<a href="https://www.komoot.com/privacy">privacy policy</a>), which also receives your IP address. Your
          location is never sent. You can remove the button in Settings.
        </p>
        <h3>Update check</h3>
        <p>
          The app downloads a small settings file from this website (hosted on GitHub Pages) to find out whether a
          newer version is available. No information about you is sent with this request. GitHub receives your IP
          address, as with any web request (
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
            GitHub privacy statement
          </a>
          ).
        </p>
        <h3>Purchases</h3>
        <p>
          Buying the app is handled by Google Play or the App Store. We do not receive your payment details. Google
          and Apple may share basic order information with us (such as country and order number), as their
          policies describe.
        </p>
      </section>

      <section className="card">
        <h2>What we don't do</h2>
        <ul>
          <li>We don't sell or share your data.</li>
          <li>We don't use advertising, analytics or crash-reporting services.</li>
          <li>We don't collect anything that identifies you.</li>
        </ul>
      </section>

      <section className="card">
        <h2>Your control</h2>
        <ul>
          <li>Delete individual journeys in the app's history, or swipe them away.</li>
          <li>Turn off location or camera access at any time in your phone's settings.</li>
          <li>Uninstalling the app deletes all of its data from your phone.</li>
        </ul>
        <p>Because we never receive your data, there is nothing for us to export or delete on our side.</p>
      </section>

      <section className="card">
        <h2>Children</h2>
        <p>AeroGauge is not directed at children under 13 and does not knowingly collect data from them.</p>
      </section>

      <section className="card">
        <h2>Changes and contact</h2>
        <p>
          If this policy changes, the new version will be posted on this page with a new date. For questions about
          privacy, contact us through <a href={contact}>GitHub</a>.
        </p>
      </section>
    </main>
  )
}
