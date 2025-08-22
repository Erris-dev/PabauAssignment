import { gql } from "@apollo/client";

export const GET_ALL_BRANDS = gql`
  query GetAllBrands {
    findAllBrands {
      id
      image
    }
  }
`;

export const GET_ALL_BRANDS_MODELS = gql`
 query GetBrandModels($brandId: ID!, $sort: sortBy!) {
  findBrandModels(id: $brandId, sortBy: $sort) {
    id
    name
    type
    image
    description
    price
  }
}
`;

export const SEARCH_MODELS = gql`
  query SearchModels($brandId: String!, $name: String!) {
    searchModels(brandId: $brandId, name: $name) {
      id
      name
      type
      image
      description
      price
    }
  }
`;

export const GET_MODEL_INFORMATION = gql`
query GetUniqueModel($brandId: ID!, $modelId: ID!) {
  findUniqueModel(brandId: $brandId, modelId: $modelId) {
    id
    name
    image
    description
    specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
    }
    musicians {
        name
        musicianImage
    }
  }
}
`;
