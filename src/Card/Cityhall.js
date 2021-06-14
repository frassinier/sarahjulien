const Cityhall = () => (
  <a
    href="https://www.google.com/search?q=Mairie+de+Flins-sur-Seine&safe=off&sxsrf=ALeKk03_8MI96No6jjIEKWViM5tkb7HkUQ%3A1618152061660&ei=fQpzYLLTJ8CJjLsP3KS8sAw&oq=Mairie+de+Flins-sur-Seine&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEMcBEK8BMgIIADIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIIxCwAxAnOgcIABBHELADULeiAVi3ogFgp6cBaANwAngAgAFLiAGVAZIBATKYAQCgAQKgAQGqAQdnd3Mtd2l6yAEJwAEB&sclient=gws-wiz&ved=0ahUKEwjyhc-WtvbvAhXABGMBHVwSD8YQ4dUDCA0&uact=5#"
    className="card"
  >
    <h3 className="card__title">Mairie</h3>
    <time className="card__time">14h00</time>
    <div className="location">
      <h4 className="location_name">
        <span className="material-icons">place</span> Flins-sur-Seine
      </h4>
      <address className="location__address">
        <span className="material-icons">near_me</span> Parc Jean boileau, 78410
        Flins-sur-Seine
      </address>
    </div>
  </a>
);

export default Cityhall;
