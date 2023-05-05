import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>En-tête</h1>

      <nav>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">L'équipe</a>
          </li>
          <li>
            <a href="#">Oeuvres</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <input type="search" name="q" placeholder="Rechercher" />

      <main>
        <article>
          <h2>En-tête d'article</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a
            diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as
            quam viverra nec consectetur ant hendrerit. Donec et mollis dolor.
            Praesent et diam eget libero egestas mattis sit amet vitae augue.
            Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
          </p>

          <h3>Sous‑section</h3>
          <p>
            Donec ut librero sed accu vehicula ultricies a non tortor. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut
            gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id
            dolor.
          </p>
          <p>
            Pelientesque auctor nisi id magna consequat sagittis. Curabitur
            dapibus, enim sit amet elit pharetra tincidunt feugiat nist
            imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed
            odio eros.
          </p>

          <h3>Autre sous‑section</h3>
          <p>
            Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
            soclis natoque penatibus et manis dis parturient montes, nascetur
            ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at
            sem facilisis semper ac in est.
          </p>
          <p>
            Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
            tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
            ultricied. Curabitur ornare, ligula semper consectetur sagittis,
            nisi diam iaculis velit, is fringille sem nunc vet mi.
          </p>
        </article>

        <aside>
          <h2>En relation</h2>
          <ul>
            <li>
              <a href="#">Combien j'aime être près des rivages</a>
            </li>
            <li>
              <a href="#">Combien j'aime être près de la mer</a>
            </li>
            <li>
              <a href="#">Bien que dans le nord de l'Angleterre</a>
            </li>
            <li>
              <a href="#">Il n'arrête jamais de pleuvoir</a>
            </li>
            <li>
              <a href="#">Eh bien…</a>
            </li>
          </ul>
        </aside>
      </main>

      <div>©Copyright. Tous droits reversés.</div>
    </div>
  );
}
