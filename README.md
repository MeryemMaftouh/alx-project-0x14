# alx-project-0x14
## MoviesDatabase API

## API Overview

This API provides comprehensive and up-to-date information on movies, TV shows, and actors. It includes YouTube trailer URLs, awards, full biographies, and more. Covers over 9 million titles and 11 million actors/crew members.

## API Version

Current version: v1 (current)

## Available Endpoints

| Endpoint                         | Description                              |
| -------------------------------- | ---------------------------------------- |
| /titles                          | Returns titles based on optional filters |
| /x/titles-by-ids                 | Returns titles by IMDb IDs               |
| /titles/{id}                     | Returns details of a specific title      |
| /titles/{id}/ratings             | Returns rating and votes for a title     |
| /titles/series/{id}              | Returns episodes of a series             |
| /titles/seasons/{id}             | Returns number of seasons for a series   |
| /titles/series/{id}/{season}     | Returns episodes of a specific season    |
| /titles/episode/{id}             | Returns details of an episode            |
| /titles/x/upcoming               | Returns upcoming titles                  |
| /titles/search/keyword/{keyword} | Search titles by keyword                 |
| /titles/search/title/{title}     | Search titles by title                   |
| /titles/search/akas/{aka}        | Search titles by alternate names         |
| /actors                          | Returns actors                           |
| /actors/{id}                     | Returns details of an actor              |
| /title/utils/titleType           | Returns title types                      |
| /title/utils/genres              | Returns genres                           |
| /title/utils/lists               | Returns predefined title lists           |

## Request and Response Format

**Request Example:**

```
GET https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_250&limit=10
Headers:
  X-RapidAPI-Key: YOUR_API_KEY
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

**Response Example:**

```json
{
  "results": [{
    "id": "tt0111161",
    "titleText": "The Shawshank Redemption",
    "releaseYear": 1994,
    "genres": ["Drama"],
    "ratingsSummary": {"averageRating": 9.3, "numVotes": 2500000}
  }]
}
```

## Authentication

Include these headers in every request:

```
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

## Error Handling

* 401 Unauthorized: Invalid or missing API key
* 404 Not Found: Resource not found
* 429 Too Many Requests: Rate limit exceeded

## Usage Limits and Best Practices

* Follow RapidAPI rate limits
* Use `limit` and `page` for pagination
* Cache responses locally when possible
* Use `info` to fetch only required fields
* Batch requests instead of calling in loops

