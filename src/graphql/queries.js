/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBdfResource = `query GetBdfResource($id: ID!) {
  getBdfResource(id: $id) {
    id
    filename
    description
    owner
    category
    date
    url
    internal
  }
}
`;
export const listBdfResources = `query ListBdfResources(
  $filter: ModelbdfResourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listBdfResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      filename
      description
      owner
      category
      date
      url
      internal
    }
    nextToken
  }
}
`;
