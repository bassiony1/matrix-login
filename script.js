
createCubes()

window.addEventListener('resize',createCubes)
function createCubes() {

        let container = document.querySelector('.container')
        let number_of_cubes = +getComputedStyle(container).getPropertyValue("--cubes")
        container.innerHTML =  ``
        for (let index = 0; index < number_of_cubes*number_of_cubes  ; index++) {
                container.innerHTML += `
                <div class="cube"></div>
                `
        }
 
                
}