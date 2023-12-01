// export type FlowerTypes = "Roses" | "Cosmos" | "Lilies" | "Pansies" | "Hyacinths" | "Tulips" | "Mums" | "Windflowers"
export type FlowerTypes = string //man.... I got a due date to meet and I am not wrestling with ts right now
export type Genotype = string //haha, genotype type
export type GenotypeData = {
    color: string,
    r?: string,
    y?: string,
    w?: string,
    s?: string,
    oy?: string,
}

export type GeneDataType = {
    FlowerTypes: {
        Genotype: GenotypeData
    }
}

