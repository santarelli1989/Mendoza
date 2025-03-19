
const Lugar = ({lugar}) => {
  
  return (
    <section className="container">
      <h1 className="text-center">{lugar.title}</h1>
      <div className="row">
        <div className="col">
          <div className="card mt-3">
            <img src={lugar.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{lugar.title}</h5>
              <p className="card-text">{lugar.description}</p>
            </div>
          </div>
          <hr />
          <div className="card mt-3">
            <img src={lugar.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{lugar.title}</h5>
              <p className="card-text">{lugar.description}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <h2>Lugar Descripcion Corta</h2>
          <p>
            {lugar.description}
          </p>
          <h2>Lugar descripcion Larga</h2>
          <p>
            {lugar.descriptionLong}
          </p>
          <h2>Mande</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            illo iusto blanditiis aliquam quod quidem deleniti ipsa doloremque
            incidunt ipsam, nesciunt sit perferendis? Corporis voluptatem porro,
            repudiandae perspiciatis delectus tempora. Iure excepturi eum minima
            iste accusantium, aliquid, corporis rem error soluta, quo obcaecati
            quaerat in porro pariatur? Cumque perspiciatis voluptatibus
            inventore nobis aut delectus. Corrupti impedit soluta quo debitis
            eveniet, voluptas delectus porro sequi voluptatem at consequatur.
            Officiis, sapiente rerum eum magnam ab ut unde deleniti quia iure
            illum libero esse facilis maiores vero id iste eveniet repellat
            earum beatae! Nostrum provident ipsa nobis quibusdam, illo
            repellendus dolor fugit laboriosam dolore asperiores excepturi ad
            ratione sunt consequuntur repellat possimus at aspernatur hic totam
            quasi. Ullam nulla esse consequatur quas totam?
          </p>
          <h2>Santiago</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            voluptates quo vero, libero velit ab. Delectus est deleniti nobis
            rem dolores minima suscipit aut at voluptates aliquam fugit
            temporibus enim amet neque, veritatis ipsa facere officia aliquid.
            Quidem numquam exercitationem dolorum distinctio quo obcaecati sequi
            eius nobis culpa perspiciatis quisquam reiciendis aut explicabo,
            voluptate beatae dolorem perferendis adipisci maiores repellendus
            quaerat accusantium eveniet nesciunt eos odio? Rem laborum nulla
            quisquam quibusdam accusamus unde voluptatibus natus odit autem aut,
            sunt sint magnam consectetur alias dolorem doloribus! Unde nostrum
            nisi quibusdam voluptatibus fugit magnam! Voluptate minus laudantium
            eveniet, consequuntur iusto, blanditiis nulla, quisquam voluptatum
            quo corporis natus explicabo cumque sapiente velit possimus
            reprehenderit! Suscipit beatae, dolores voluptatibus explicabo autem
            rerum assumenda fugit dignissimos quis recusandae praesentium magni
            ullam molestiae minima ab adipisci quisquam perferendis! At veniam
            amet hic iusto dolor modi eveniet accusamus sunt nobis? Aliquam
            ducimus consequatur provident quia officiis blanditiis repudiandae
            aspernatur magni repellat, reprehenderit, tenetur excepturi ut
            expedita unde earum, totam corrupti nemo molestiae odio saepe. Error
            minus nesciunt, fugiat corrupti explicabo placeat dolorem laboriosam
            unde deserunt, ullam exercitationem voluptates possimus iure sit
            facere, at necessitatibus repellat quam aperiam architecto commodi
            expedita atque corporis obcaecati? Dolorem tempore placeat enim!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Lugar;
