export const creaCard = (personaje) => {
    const html = `
    <div class="card bg-dark text-light border" style="width: 18rem;">
    <img src="${personaje.image}" class="card-img-top" alt="${personaje.image}">
    <div class="card-body">
      <h5 class="card-title">${personaje.name}</h5>
      <p class="card-text">${personaje.status}</p>
      <a href="#" 
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-id="${personaje.id}">Ver más</a>
    </div>
  </div>
  `;
  return html;
  }

  export const modalBody=(personaje)=>{
    const div=document.createElement('div');
    let html=
    `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>`;
  return div;
  }

  export const spinner = () =>{
    const div = document.createElement('div');
    const html =
    `<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
  div.innerHTML = html;
  return div;

}
