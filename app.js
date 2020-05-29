function tapHere() {
    let lightbulb = "off"
    if (lightbulb === 'on') {
        alert("Hey that light is on!")
    } else { alert('Its dark, can we please turn the light on?')}
}

function tapHereNext() {
    const myArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    for (i = 0; i < myArray.length; i++){
        console.log(i)
        alert(myArray[i])
    }
}