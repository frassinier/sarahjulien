import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="" />
      <main>
        <h1 className="title">Save the date</h1>
        <h2 className="sub-title">Sarah & Julien vont essayer de se marier!</h2>
        <p className="description">
          <span className="title">Samedi 4 Septembre 2021</span>
          <br />
          Brunch prévu le Dimanche
        </p>

        <div className="timeline">
          <div className="grid">
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
                  <span className="material-icons">near_me</span> Parc Jean
                  boileau, 78410 Flins-sur-Seine
                </address>
              </div>
            </a>

            <a
              href="https://www.google.com/search?q=La+Grange+du+Lavoir&safe=off&sxsrf=ALeKk03_8MI96No6jjIEKWViM5tkb7HkUQ%3A1618152061660&ei=fQpzYLLTJ8CJjLsP3KS8sAw&oq=La+Grange+du+Lavoir&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEMcBEK8BMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIABBHELADUJvFAVibxQFgnMsBaANwAngAgAFaiAGwAZIBATKYAQCgAQKgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=gws-wiz&ved=0ahUKEwjyhc-WtvbvAhXABGMBHVwSD8YQ4dUDCA0&uact=5#"
              className="card"
            >
              <h3 className="card__title">Réception</h3>
              <time className="card__time">16h00</time>
              <div className="location">
                <h4 className="location__name">
                  <span className="material-icons">place</span> La Grange du
                  Lavoir
                </h4>
                <address className="location__address">
                  <span className="material-icons">near_me</span> 8 Rue du
                  Lavoir, 27120 Houlbec-Cocherel
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

            <div className="card">
              <h3 className="card__title">Se loger</h3>
              <p>Exemples de logements à proximité du lieu de réception:</p>
              <ul>
                <li>
                  <a href="https://www.abritel.fr/location-vacances/p1927903?arrival=2021-09-04&departure=2021-09-05&oc=OYxW767nIghuafjTWqR9r&uni_id=2103678&utm_campaign=earned%3Aabritel%3Asharecopylink%3AFRA&utm_content=1927903&utm_medium=social&utm_source=direct">
                    <span class="material-icons">bed</span> Une chambre de 30m²
                    à Saint Aquilin de Pacy
                  </a>
                </li>
                <li>
                  <a href="https://www.booking.com/hotel/fr/la-chouette-illuminee.fr.html?aid=397594;label=gog235jc-1DCAEoggI46AdIDVgDaE2IAQGYAQ24AQfIAQzYAQPoAQH4AQKIAgGoAgO4AvSEkoYGwAIB0gIkYjNiMGY5ZTktYjVhZi00M2E5LWFiMmUtZjZiYzdmMTNmZGNi2AIE4AIB;sid=de039fe9321ef0899d0b1eec214edd09;all_sr_blocks=742069101_329257108_2_0_0;checkin=2021-09-04;checkout=2021-09-05;dest_id=-1432284;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=742069101_329257108_2_0_0;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=742069101_329257108_2_0_0__4228;srepoch=1623491223;srpvid=60e344cbabcc0196;type=total;ucfs=1;sig=v1R5WWL_uZ">
                    <span class="material-icons">bed</span> Une chambre avec lit
                    double en mezzanine et un canapé à Ménilles
                  </a>
                </li>
                <li>
                  <a href="https://www.booking.com/hotel/fr/domaine-de-la-haie-des-granges.fr.html?aid=397594;label=gog235jc-1DCAEoggI46AdIDVgDaE2IAQGYAQ24AQfIAQzYAQPoAQH4AQKIAgGoAgO4AvSEkoYGwAIB0gIkYjNiMGY5ZTktYjVhZi00M2E5LWFiMmUtZjZiYzdmMTNmZGNi2AIE4AIB;sid=de039fe9321ef0899d0b1eec214edd09;all_sr_blocks=138404906_328287483_2_2_0;checkin=2021-09-04;checkout=2021-09-05;dest_id=-1432284;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;highlighted_blocks=138404906_328287483_2_2_0;hpos=2;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=138404906_328287483_2_2_0__13179;srepoch=1623491223;srpvid=60e344cbabcc0196;type=total;ucfs=1;sig=v11T25dcs1#hotelTmpl">
                    <span class="material-icons">bed</span> Des chambres avec
                    lit double à Ménilles
                  </a>
                </li>
                <li>
                  <a href="https://www.booking.com/hotel/fr/la-ferme-des-isles.fr.html?aid=397594;label=gog235jc-1DCAEoggI46AdIDVgDaE2IAQGYAQ24AQfIAQzYAQPoAQH4AQKIAgGoAgO4AvSEkoYGwAIB0gIkYjNiMGY5ZTktYjVhZi00M2E5LWFiMmUtZjZiYzdmMTNmZGNi2AIE4AIB;sid=ddc485803a1229e9e76f7848abafacb8;all_sr_blocks=132266705_93779550_0_0_0;checkin=2021-09-04;checkout=2021-09-05;dest_id=-1432284;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=5;highlighted_blocks=132266705_93779550_0_0_0;hpos=5;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=132266705_93779550_0_0_0__57100;srepoch=1623491223;srpvid=60e344cbabcc0196;type=total;ucfs=1;sig=v1-RQDKIYw#hotelTmpl">
                    <span class="material-icons">home</span> Une ferme à
                    Autheuil-Authouillet avec plusieurs couchages
                  </a>
                </li>
                <li>
                  <a href="https://www.booking.com/hotel/fr/la-maison-rose-st-pierre-d-autils.fr.html?aid=397594;label=gog235jc-1DCAEoggI46AdIDVgDaE2IAQGYAQ24AQfIAQzYAQPoAQH4AQKIAgGoAgO4AvSEkoYGwAIB0gIkYjNiMGY5ZTktYjVhZi00M2E5LWFiMmUtZjZiYzdmMTNmZGNi2AIE4AIB;sid=de039fe9321ef0899d0b1eec214edd09;all_sr_blocks=680169601_277287536_4_0_0;checkin=2021-09-04;checkout=2021-09-05;dest_id=-1432284;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=11;highlighted_blocks=680169601_277287536_4_0_0;hpos=11;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=680169601_277287536_4_0_0__17000;srepoch=1623491223;srpvid=60e344cbabcc0196;type=total;ucfs=1;sig=v13qW1VxyN#hotelTmpl">
                    <span class="material-icons">home</span> Une maison à
                    Saint-Pierre-dʼAutils
                  </a>
                </li>
                <li>
                  <a href="https://www.booking.com/hotel/fr/ha-tel-kyriad-vernon-saint-marcel.fr.html?aid=397594;label=gog235jc-1DCAEoggI46AdIDVgDaE2IAQGYAQ24AQfIAQzYAQPoAQH4AQKIAgGoAgO4AvSEkoYGwAIB0gIkYjNiMGY5ZTktYjVhZi00M2E5LWFiMmUtZjZiYzdmMTNmZGNi2AIE4AIB;sid=de039fe9321ef0899d0b1eec214edd09;all_sr_blocks=39309701_326735603_0_42_0;checkin=2021-09-04;checkout=2021-09-05;dest_id=-1432284;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=7;highlighted_blocks=39309701_326735603_0_42_0;hpos=7;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=39309701_326735603_0_42_0__9090;srepoch=1623491223;srpvid=60e344cbabcc0196;type=total;ucfs=1;sig=v1vbutHNB1#hotelTmpl">
                    <span class="material-icons">business</span> Hôtel Kyriad
                    Vernon / Saint Marcel
                  </a>
                </li>
                <li>
                  <a href="https://www.booking.com/hotel/fr/mont-vernon-saint-marcel.fr.html?aid=397594;label=gog235jc-1DCAEoggI46AdIDVgDaE2IAQGYAQ24AQfIAQzYAQPoAQH4AQKIAgGoAgO4AvSEkoYGwAIB0gIkYjNiMGY5ZTktYjVhZi00M2E5LWFiMmUtZjZiYzdmMTNmZGNi2AIE4AIB;sid=de039fe9321ef0899d0b1eec214edd09;all_sr_blocks=26310902_203992225_0_42_0;checkin=2021-09-04;checkout=2021-09-05;dest_id=-1432284;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=3;highlighted_blocks=26310902_203992225_0_42_0;hpos=3;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=26310902_203992225_0_42_0__9990;srepoch=1623491223;srpvid=60e344cbabcc0196;type=total;ucfs=1;sig=v1Oqlmsq4x#hotelTmpl">
                    <span class="material-icons">business</span> Hôtel à
                    Saint-Marcel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
