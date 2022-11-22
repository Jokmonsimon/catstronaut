const {gql} = require('apollo-server');

const typeDefs = gql`
    # Schema definitions go here
    type Query {
        "Get tracks array for Homepage grid"
        tracksForHome: [Track!]!
    }

    "A track is a group  of Modules that teaches about a specific topic"
    type Track {
        # Fields go here
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "Author of s complete Track or a Module"
    type Author {
        # Fields go here
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs;