function converter(degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    if (!celsiusExist && !fahrenheitExist){
        throw new Error ('Valor não indetificado')
    }

    // fluxo ideal
    let updatedDegree = Number(degree.toUpperCase().replace("C", "")) 
    let formula = (celcius) => celcius * 9/5 + 32
    let degreeSing = 'F'

    // fluxo alternativo
    if(fahrenheitExist){
        updatedDegree = Number(degree.toUpperCase().replace("F", ""))
        formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        degreeSing = 'C'

        return formula(updatedDegree) + degreeSing
    }

    return formula(updatedDegree) + degreeSing
}

try{
    console.log(converter('50F'))
} catch (error){
    console.log(error.message)
}
