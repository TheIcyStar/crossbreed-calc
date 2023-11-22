//Converter script to convert the "ACNH/ACNL Flower Genes" google sheet json export to a usable one for Crossbreed Calc
//Takes in a json file ../resources/rawGeneData.json and outputs ../resources/geneData.json
//To use: run directly in node
const writeFile = require("fs/promises").writeFile

const genedata = require("../resources/rawGeneData.json")
let newData = {}

//For all of the flowers...
for(const flower in genedata){
    if(flower === "Violets" || flower === "Carnations"){
        continue
    }
    newData[flower] = {}

    //for each genotype in the flower...
    for(const genotype of genedata[flower]){

        //create individual entires
        let newGenotypeData = {}
        let genotypeName = ""
        for(const infokey of Object.keys(genotype)){
            if(infokey === "hex" || infokey === "numeric" || infokey === "binary"){
                continue
            }
            if(infokey === "genotype"){
                genotypeName = genotype[infokey]
                continue
            }
            newGenotypeData[infokey] = genotype[infokey]
        }
        

        newData[flower][genotypeName] = newGenotypeData
    }
}

writeFile("../resources/geneData.json", JSON.stringify(newData, null, "\t"))