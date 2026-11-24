# Auto File Organizer

Auto File Organizer is a small Express app that accepts file uploads and stores
them in folders named for their file extension. Uploaded files receive unique
server-generated names.

## Requirements

- Node.js and npm

## Setup

Install dependencies:

```sh
npm install
```

Create a local `.env` file from the example:

```powershell
Copy-Item .env.example .env
```

Available environment variables:

| Variable | Description | Example |
| --- | --- | --- |
| `PORT` | Port the server listens on | `8000` |
| `NODE_ENV` | Environment label printed at startup | `development` |
| `MAX_FILE_SIZE` | Maximum upload size in megabytes | `100` |

Start the app:

```sh
npm run dev
```

For a regular start without the development watcher, use `npm start`.

Open [http://localhost:8000/organize](http://localhost:8000/organize) to use the
upload form. If you change `PORT`, use that port in the URL.

## Upload endpoint

`POST /organize` accepts a `multipart/form-data` request with one file in the
`file` field. For example:

```sh
curl -F "file=@document.pdf" http://localhost:8000/organize
```

Files must have a filename extension. The default maximum upload size is 100 MB;
set `MAX_FILE_SIZE` in megabytes to change it. Files are saved on the server in
`uploads/<extension>/` (for example, `uploads/pdf/`). The `uploads/` directory
is ignored by Git. After uploading, the app opens `/results.html`, which lists
uploaded filenames in their extension folders without exposing file contents.
The page gets this directory listing from `GET /api/uploads`.

## License

This project is available under the [MIT License](./LICENCE).
