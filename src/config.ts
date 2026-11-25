/**
 * AeroGauge update rules. Edit this file, commit and push to `main`:
 * GitHub Actions rebuilds the site and publishes it as `/config.json`,
 * which the app checks at launch (and when it returns to the foreground,
 * at most every 6 hours).
 *
 * - minVersion:    versions BELOW this must update (blocking screen,
 *                  except while a journey is recording).
 * - latestVersion: versions below this get a one-time "Update available"
 *                  prompt ("Later" hides it until the next latestVersion).
 * - updateUrl:     where "Update" goes (store page or download link).
 *
 * Versions are the app's pubspec `version` without the build number
 * (e.g. "0.2.0"). Leave a field out to switch that rule off.
 */
export interface PlatformRules {
  minVersion?: string
  latestVersion?: string
  updateUrl?: string
}

export interface UpdateConfig {
  android: PlatformRules
  ios: PlatformRules
  messages: {
    required: { title: string; body: string }
    optional: { title: string; body: string }
  }
}

const site = 'https://kingeke.github.io/aerogauge-config/'

const config: UpdateConfig = {
  android: {
    minVersion: '0.1.0',
    latestVersion: '0.1.0',
    updateUrl: site,
  },
  ios: {
    minVersion: '0.1.0',
    latestVersion: '0.1.0',
    updateUrl: site,
  },
  messages: {
    required: {
      title: 'Update required',
      body: 'This version of AeroGauge is no longer supported. Please update to keep using the app.',
    },
    optional: {
      title: 'Update available',
      body: 'A new version of AeroGauge is ready with fixes and improvements.',
    },
  },
}

export default config
