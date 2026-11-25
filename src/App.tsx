import config, { type PlatformRules } from './config'

const repo = 'https://github.com/kingeke/aerogauge-config'

function Rule({ label, value, hint }: { label: string; value?: string; hint: string }) {
  return (
    <div className="rule">
      <div className="label">{label}</div>
      <div className={value ? 'value' : 'value off'}>{value ?? 'off'}</div>
      <div className="hint">{hint}</div>
    </div>
  )
}

function Platform({ name, rules }: { name: string; rules: PlatformRules }) {
  return (
    <section className="card">
      <h2>{name}</h2>
      <div className="rules">
        <Rule label="Minimum version" value={rules.minVersion} hint="Older versions must update" />
        <Rule label="Latest version" value={rules.latestVersion} hint="Older versions are offered it" />
      </div>
      <div className="url">
        Update link:{' '}
        {rules.updateUrl ? <a href={rules.updateUrl}>{rules.updateUrl}</a> : <span className="off">none</span>}
      </div>
    </section>
  )
}

export default function App() {
  const { messages } = config
  return (
    <main>
      <header>
        <div className="logo">✈</div>
        <div>
          <h1>AeroGauge</h1>
          <p className="sub">Update configuration</p>
        </div>
      </header>

      <div className="grid">
        <Platform name="Android" rules={config.android} />
        <Platform name="iOS" rules={config.ios} />
      </div>

      <section className="card">
        <h2>What users see</h2>
        <div className="previews">
          <div className="preview required">
            <div className="tag">Below minimum · blocking</div>
            <h3>{messages.required.title}</h3>
            <p>{messages.required.body}</p>
          </div>
          <div className="preview">
            <div className="tag">Below latest · one-time prompt</div>
            <h3>{messages.optional.title}</h3>
            <p>{messages.optional.body}</p>
          </div>
        </div>
        <p className="note">
          A required update never blocks someone mid-journey: they see a banner and can finish first.
          If the app can't reach this page it uses the last rules it downloaded, or none.
        </p>
      </section>

      <section className="card">
        <h2>Change it</h2>
        <ol>
          <li>
            Edit <a href={`${repo}/edit/main/src/config.ts`}>src/config.ts</a> (on GitHub or locally).
          </li>
          <li>Commit to <code>main</code>. The site redeploys in about a minute.</li>
          <li>
            The app reads <a href="config.json">config.json</a> at launch.
          </li>
        </ol>
        <details>
          <summary>Raw config.json</summary>
          <pre>{JSON.stringify(config, null, 2)}</pre>
        </details>
      </section>
    </main>
  )
}
