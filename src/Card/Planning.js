import "./Planning.css";

export const Planning = () => (
  <a
    href="https://www.google.com/search?q=La+Grange+du+Lavoir&safe=off&sxsrf=ALeKk03_8MI96No6jjIEKWViM5tkb7HkUQ%3A1618152061660&ei=fQpzYLLTJ8CJjLsP3KS8sAw&oq=La+Grange+du+Lavoir&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEMcBEK8BMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIABBHELADUJvFAVibxQFgnMsBaANwAngAgAFaiAGwAZIBATKYAQCgAQKgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=gws-wiz&ved=0ahUKEwjyhc-WtvbvAhXABGMBHVwSD8YQ4dUDCA0&uact=5#"
    className="card"
  >
    <h3 className="card__title">Réception</h3>
    <time className="card__time">16h00</time>
    <div className="location">
      <h4 className="location__name">
        <span className="material-icons">place</span> Houlbec-Cocherel
      </h4>
      <address className="location__address">
        <span className="material-icons">near_me</span> La Grange du Lavoir, 8
        Rue du Lavoir, 27120 Houlbec-Cocherel
      </address>
    </div>
    <div className="planning">
      <h5 className="planning__title">Planning</h5>
      <dl>
        <div>
          <dt>Cérémonie</dt>
          <dd>
            <time>16h30</time>
          </dd>
        </div>
        <div>
          <dt>Chouquettes</dt>
          <dd>
            <time>17h00</time>
          </dd>
        </div>
        <div>
          <dt>Cocktail</dt>
          <dd>
            <time>18h00</time>
          </dd>
        </div>
        <div>
          <dt>Dîner</dt>
          <dd>
            <time>19h30</time>
          </dd>
        </div>
      </dl>
    </div>
  </a>
);

export default Planning;
