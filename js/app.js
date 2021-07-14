const $projects = $("#projects");
$.ajax("./json/projects.json")
.then(data => {
    data.forEach(project => {
        const $project = $(`
        <div class="card" style="width: 18rem;">
          <img src="${project.image}" class="card-img-top" alt="">
            <div class="card-body">
             <h5 class="card-title">${project.title}</h5>
              <p class="card-description">${project.description}</p>
              <a class="link" href="${project.link}">Click for details</a>
            </div>
          </div>`);
        $projects.append($project);
    })
})
.catch(error => {console.log(error)});
