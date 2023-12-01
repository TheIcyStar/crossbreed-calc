export type FlowerTypes = "Roses" | "Cosmos" | "Lilies" | "Pansies" | "Hyacinths" | "Tulips" | "Mums" | "Windflowers"
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

