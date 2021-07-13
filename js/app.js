const $projects = $(".projects");
$.ajax("./json/projects.json")
.then(data => {
    data.forEach(project => {
        // const $project = $("#projects");
        // const $title = $("<h2>").addClass("name").text(`${project.name}`);
        // const $description = $("<h3>").addClass("description").text(`${project.description}`);
        // $project.append($title).append($description);
        const project = $(`<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`)
        $projects.append($project);
    })
})
.catch(error => {console.log(error)});