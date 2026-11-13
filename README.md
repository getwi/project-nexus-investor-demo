# Project Nexus — Investor Demo

A clean, responsive, browser-based demonstration of a proposed Nigerian product identity, verification and traceability platform.

## What is included

- Investor-facing overview and platform explanation
- Interactive public credential-check demonstration
- Operations workspace with overview, manufacturers, products, production groups, verification activity, risk review and integrations
- Evidence-led manufacturer onboarding concept
- Product taxonomy focused on products manufactured or processed in Nigeria
- Clear prototype labels and limitations throughout

## Important status note

This is a **front-end demonstration using sample data only**. It is not connected to a backend, live manufacturers, NAFDAC, payment services, production QR credentials or real verification infrastructure. All dashboard figures and records are illustrative. A recognised demo credential confirms only that a sample record exists in this demonstration; it does not prove the physical product is genuine, safe, uncontaminated or regulator-approved.

The company name is not final. “Project Nexus” is an internal working label for this prototype.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org
2. Extract this folder.
3. Open the folder in VS Code or Cursor.
4. Open Terminal → New Terminal.
5. Run:

   ```bash
   npm install
   npm run dev
   ```

6. Open the local address shown in the terminal (usually `http://localhost:5173`).

## Build check

```bash
npm run build
```

Vite creates the production website in `dist/`.

## Commit to GitHub

1. Create a new empty GitHub repository named `project-nexus-investor-demo`.
2. From this project folder:

   ```bash
   git init
   git add .
   git commit -m "Create Project Nexus investor demo"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/project-nexus-investor-demo.git
   git push -u origin main
   ```

Replace `YOUR-USERNAME` with your GitHub username.

## Deploy on Vercel

1. Sign in to https://vercel.com using GitHub.
2. Select **Add New → Project**.
3. Import the `project-nexus-investor-demo` repository.
4. Vercel should detect Vite automatically.
5. Confirm:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. Do not add environment variables for this demo (there is no backend and no secrets).
7. Select **Deploy**.
8. Share the HTTPS URL Vercel provides only after that deployment succeeds.
9. Future pushes to the connected `main` branch will trigger new deployments.

## Suggested investor-demo flow

1. Start on the overview page and explain the problem and platform model.
2. Open **Verify a product** and test `NEXUS-NG-00184`.
3. Show the operations workspace and switch between its sections.
4. Explain that manufacturer, product and batch records are designed to be evidence-reviewed before activation.
5. Be explicit that this is a product prototype, not a live operating network.

## Next engineering work (not included in this demo)

- API/backend and PostgreSQL data model
- Authentication, role-based access and tenant isolation
- Manufacturer evidence submission and review workflows
- Credential issuance and secure QR generation
- Real verification-event ingestion and risk rules
- Audit logs, monitoring, privacy controls and production security
- Legal/regulatory review and pilot validation

Do not present simulated records, metrics, partners or statuses as real-world traction.
