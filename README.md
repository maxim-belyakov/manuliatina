# manuliatina
The repository of website www.manuliatina.com

## Deployment

The project is automatically deployed to Namecheap shared hosting on every push to the `master` branch via GitHub Actions.

### Setup

Add the following secrets in **Settings → Secrets and variables → Actions** of the GitHub repository:

| Secret | Description | Where to find |
|---|---|---|
| `FTP_SERVER` | FTP server address (e.g. `server123.web-hosting.com`) | cPanel → FTP Accounts → Configure FTP Client |
| `FTP_USERNAME` | FTP username | cPanel → FTP Accounts |
| `FTP_PASSWORD` | FTP account password | Set when creating an FTP account in cPanel → FTP Accounts |

Once the secrets are added, every push to `master` will automatically build the project and upload the contents of `build/` to `/public_html/` on the server.
