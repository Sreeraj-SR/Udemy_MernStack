function whosPaying() {      
        names = ["Angela", "Ben", "Jenny", "Michael", "Chole"]
        number = (Math.random() * names.length) 
        number = Math.floor(number) + 1
        return names[number]  
    }

 whosPaying()