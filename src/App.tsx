import { useMemo, useState } from "react";
import {
  Activity, AlertTriangle, ArrowDownRight, ArrowRight, ArrowUpRight, Boxes,
  Building2, Check, CheckCircle2, ChevronDown, CircleHelp, Code2, Database,
  FileCheck2, Fingerprint, Globe2, Layers3, Menu, PackageCheck, QrCode,
  Search, ShieldCheck, Sparkles, X
} from "lucide-react";
import { categories, manufacturers, navigation, products } from "./data";

type Page = "home" | "workspace" | "verify";
const sampleCode = "NEXUS-NG-00184";

function Brand() {
  return <div className="brand"><span className="brand-mark"><Fingerprint size={21}/></span><span>PROJECT NEXUS<small>PRODUCT TRUST INFRASTRUCTURE</small></span></div>;
}
function Status({ children, tone = "amber" }: { children: React.ReactNode; tone?: "green" | "amber" | "red" | "blue" }) {
  return <span className={`status ${tone}`}><i />{children}</span>;
}
function Button({ children, onClick, variant = "primary" }: { children: React.ReactNode; onClick?: () => void; variant?: "primary" | "secondary" | "quiet" | "light" | "outline-light" }) {
  return <button className={`button ${variant}`} onClick={onClick}>{children}</button>;
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [section, setSection] = useState("overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [code, setCode] = useState("");
  const [result, setResult] = useState<"recognised" | "review" | "missing" | null>(null);

  const title = useMemo(() => navigation.find(n => n.id === section)?.label ?? "Overview", [section]);
  const verify = () => setResult(code.trim().toUpperCase() === sampleCode ? "recognised" : code.trim().toUpperCase() === "NEXUS-NG-00185" ? "review" : "missing");
  const openWorkspace = (target = "overview") => { setSection(target); setPage("workspace"); setMobileOpen(false); window.scrollTo(0, 0); };
  const openVerify = () => { setPage("verify"); window.scrollTo(0, 0); };

  return <div className="app-shell">
    <div className="prototype-bar"><span><span className="pulse" /> Investor preview environment</span><span>Sample data · Not a live production service</span></div>
    <header className="site-header">
      <div className="header-inner">
        <button className="brand-button" onClick={() => setPage("home")} aria-label="Project Nexus home"><Brand /></button>
        <nav className="desktop-nav" aria-label="Main navigation">
          <button onClick={() => setPage("home")}>Platform</button>
          <button onClick={() => openWorkspace()}>Workspace preview</button>
          <button onClick={openVerify}>Consumer verification</button>
        </nav>
        <div className="header-actions"><Button variant="secondary" onClick={openVerify}>Verify a product <ArrowRight size={15}/></Button><button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button></div>
      </div>
      {mobileOpen && <div className="mobile-nav"><button onClick={() => setPage("home")}>Platform</button><button onClick={() => openWorkspace()}>Workspace preview</button><button onClick={openVerify}>Consumer verification</button></div>}
    </header>

    {page === "home" && <main>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> DIGITAL IDENTITY FOR NIGERIAN-MADE PRODUCTS</div>
            <h1>Make every product<br/><em>accountable.</em></h1>
            <p className="hero-lede">A connected infrastructure layer for product identity, consumer verification and traceability — designed around products manufactured or processed in Nigeria.</p>
            <div className="hero-actions"><Button onClick={() => openWorkspace()}>Explore the platform <ArrowRight size={16}/></Button><Button variant="secondary" onClick={openVerify}>Try product verification <QrCode size={16}/></Button></div>
            <div className="hero-footnote"><ShieldCheck size={15}/> Evidence-led onboarding. Public verification. Responsible product intelligence.</div>
          </div>
          <div className="hero-visual" aria-label="Illustrative product credential card">
            <div className="visual-top"><span className="mini-label">PRODUCT IDENTITY</span><span className="visual-state"><span/> SAMPLE RECORD</span></div>
            <div className="credential">
              <div className="credential-icon"><PackageCheck size={25}/></div>
              <div><small>PRODUCT UNIT CREDENTIAL</small><strong>NX-NG-••••-0184</strong><span>Illustrative registered record</span></div>
            </div>
            <div className="credential-divider"/>
            <div className="credential-details"><div><small>PRODUCT</small><b>Milk powder · 14g</b></div><div><small>ORIGIN CLAIM</small><b>Nigeria · Evidence review</b></div><div><small>RECORD STATE</small><Status tone="amber">Demo only</Status></div></div>
            <div className="scan-hint"><div className="qr-art"><span/><span/><span/><i/></div><div><b>One unit. One digital identity.</b><small>QR is a carrier for a credential — not proof by itself.</small></div></div>
            <div className="visual-caption">Concept illustration · No live credential issued</div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="trust-inner"><span>BUILT AROUND FOUR PRINCIPLES</span><b><Fingerprint/> Unique unit identity</b><b><FileCheck2/> Evidence before activation</b><b><Activity/> Traceable events</b><b><ShieldCheck/> Accountable governance</b></div></section>

      <section className="section"><div className="section-heading"><div className="eyebrow dark-eyebrow">THE CHALLENGE</div><h2>Product trust needs more than a printed code.</h2><p>Product identity, origin evidence and verification activity are often fragmented. Nexus is designed to connect those records into a single, auditable workflow.</p></div>
        <div className="problem-grid">
          <article className="problem-card"><span className="problem-number">01</span><h3>Unclear product origin</h3><p>Brand ownership, local distribution and domestic manufacturing are different claims. Each eligible SKU needs its own evidence.</p></article>
          <article className="problem-card"><span className="problem-number">02</span><h3>Disconnected records</h3><p>Manufacturer, facility, product, production and unit records need to relate to one another consistently.</p></article>
          <article className="problem-card"><span className="problem-number">03</span><h3>Limited visibility</h3><p>Repeated or unusual verification activity can create signals for human review — not automatic accusations.</p></article>
        </div>
      </section>

      <section className="section section-soft"><div className="section-heading"><div className="eyebrow dark-eyebrow">HOW THE PLATFORM WORKS</div><h2>From manufacturer evidence to a consumer check.</h2><p>A defined chain of records links the participating organisation to an individual saleable unit and its verification history.</p></div>
        <div className="flow-grid">
          {[["01","Organisation & facility","Establish the legal entity, production location and responsible users."],["02","Product & origin evidence","Review the exact product variant, local processing or manufacturing claim and supporting records."],["03","Production group & units","Create traceable production records and issue a unique digital identity to each eligible unit."],["04","Consumer verification","Let a consumer check a presented credential in a mobile browser and record the event."]].map(([n,t,d])=><div className="flow-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowRight className="flow-arrow" size={17}/></div>)}
        </div>
        <div className="architecture-note"><Layers3 size={18}/><span><b>One connected platform.</b> Organisation → Facility → Product → Variant → Production group → Unit identity → Verification event.</span></div>
      </section>

      <section className="section"><div className="section-heading"><div className="eyebrow dark-eyebrow">INITIAL PRODUCT SCOPE</div><h2>Start where local production and public value meet.</h2><p>Priority reflects the current research baseline, not an exclusive category list. Eligibility depends on evidence of Nigerian manufacture or processing for the specific product variant.</p></div>
        <div className="category-grid">{categories.map((c,i)=><article className="category-card" key={c.title}><div className="category-top"><span className="category-icon">{i===0?<PackageCheck/>:i===1?<Boxes/>:i===2?<Layers3/>:i===3?<ShieldCheck/>:<Database/>}</span><span className={`priority ${i<4?"priority-high":""}`}>{c.priority}</span></div><h3>{c.title}</h3><p>{c.detail}</p></article>)}</div>
        <p className="scope-note"><AlertTriangle size={15}/> Imported-only goods distributed in Nigeria are outside the Nigerian-made register. Pharmaceuticals are excluded from the current scope. Alcoholic beverages require additional category-specific regulatory review.</p>
      </section>

      <section className="section dark-section"><div className="dark-section-grid"><div><div className="eyebrow">PLATFORM OPERATIONS</div><h2>Designed for a growing manufacturer network.</h2><p>One operational workspace for onboarding, product records, production identities, verification events and risk review.</p><Button variant="light" onClick={() => openWorkspace()}>Open workspace preview <ArrowRight size={16}/></Button></div><div className="module-list">{[["01","Manufacturer onboarding"],["02","Product & SKU registry"],["03","Production group management"],["04","Consumer verification events"],["05","Risk review & investigation"],["06","API & partner integrations"]].map(([n,t])=><div key={n}><span>{n}</span><b>{t}</b><ArrowUpRight size={15}/></div>)}</div></div></section>

      <section className="section"><div className="section-heading"><div className="eyebrow dark-eyebrow">TRUST & BOUNDARIES</div><h2>Useful infrastructure. Carefully defined claims.</h2><p>Nexus is designed to complement existing regulatory and quality systems — not to replace them.</p></div>
        <div className="boundary-grid"><div className="boundary-card"><CheckCircle2/><h3>What a recognised credential means</h3><p>The presented digital credential matches a record registered in the platform, subject to that record’s status and the platform’s controls.</p></div><div className="boundary-card boundary-caution"><CircleHelp/><h3>What it does not establish</h3><p>It does not independently prove the physical contents, packaging integrity, product safety, absence of contamination or regulatory approval.</p></div></div>
        <div className="regulatory-note"><ShieldCheck size={18}/><p><b>Regulatory position:</b> The platform is a proposed technology service, not a regulator, certification body or substitute for NAFDAC registration, inspection, laboratory testing or enforcement.</p></div>
      </section>

      <section className="closing-cta"><div><div className="eyebrow">EXPLORE THE CONCEPT</div><h2>See the operating model in action.</h2><p>Walk through the sample verification flow and the proposed operations workspace.</p></div><div className="closing-actions"><Button variant="light" onClick={() => openWorkspace()}>Open workspace <ArrowRight size={16}/></Button><Button variant="outline-light" onClick={openVerify}>Try verification</Button></div></section>
    </main>}

    {page === "verify" && <main className="verify-page">
      <button className="back-link" onClick={() => setPage("home")}>← Back to platform overview</button>
      <div className="verify-card">
        <div className="verify-icon"><QrCode size={27}/></div><div className="eyebrow dark-eyebrow">PUBLIC DEMONSTRATION</div><h1>Check a product credential.</h1><p>Enter a sample code to see how a consumer-facing verification response could appear. No real product is being checked.</p>
        <form onSubmit={e=>{e.preventDefault();verify();}}><label htmlFor="credential-code">Product credential</label><div className="input-row"><input id="credential-code" value={code} onChange={e=>{setCode(e.target.value);setResult(null);}} placeholder="e.g. NEXUS-NG-00184" autoComplete="off"/><button className="button primary" type="submit"><Search size={16}/> Check code</button></div></form>
        <div className="sample-codes"><span>Try a sample:</span><button onClick={()=>{setCode(sampleCode);setResult(null);}}>Recognised record</button><button onClick={()=>{setCode("NEXUS-NG-00185");setResult(null);}}>Review flag</button><button onClick={()=>{setCode("NEXUS-NG-99999");setResult(null);}}>No match</button></div>
        {result && <div className={`verify-result ${result}`} role="status" aria-live="polite">
          {result==="recognised"?<CheckCircle2/>:result==="review"?<AlertTriangle/>:<CircleHelp/>}
          <div><b>{result==="recognised"?"Credential recognised — sample record":result==="review"?"Additional review indicated":"No matching sample record"}</b>
          <p>{result==="recognised"?"This demonstration contains a matching record for a sample milk powder unit. Record status: active demo record.":result==="review"?"This sample credential is flagged for review in the demonstration. It is not a finding about any real product.":"No matching sample record was found. This does not establish that a physical product is counterfeit."}</p></div>
        </div>}
        <div className="verify-disclaimer"><ShieldCheck size={17}/><span><b>Important:</b> A recognised digital credential is not independent proof that the physical item is genuine, safe, uncontaminated or regulator-approved.</span></div>
      </div>
    </main>}

    {page === "workspace" && <main className="workspace-page">
      <div className="workspace-topline"><div><div className="eyebrow dark-eyebrow">PLATFORM WORKSPACE</div><h1>Operations centre</h1><p>A proposed operating view for manufacturer, product and verification workflows.</p></div><Status tone="blue">Illustrative demo environment</Status></div>
      <div className="workspace-layout">
        <aside className="workspace-sidebar" aria-label="Workspace sections">
          <div className="sidebar-brand"><Brand/></div>
          {["Workspace","Network","Intelligence","Platform"].map(group=><div className="nav-group" key={group}><span>{group}</span>{navigation.filter(n=>n.group===group).map(n=><button key={n.id} className={section===n.id?"selected":""} onClick={()=>setSection(n.id)}>{n.id==="overview"?<Activity size={16}/>:n.id==="organisations"?<Building2 size={16}/>:n.id==="products"?<Boxes size={16}/>:n.id==="batches"?<Layers3 size={16}/>:n.id==="verifications"?<QrCode size={16}/>:n.id==="risk"?<AlertTriangle size={16}/>:<Code2 size={16}/>}<span>{n.label}</span></button>)}</div>)}
          <div className="sidebar-bottom"><div className="demo-avatar">NX</div><div><b>Demo workspace</b><small>Sample organisation</small></div></div>
        </aside>
        <div className="workspace-content">
          <div className="workspace-heading"><div><div className="breadcrumb">Workspace <span>/</span> {title}</div><h2>{title}</h2></div><div className="workspace-actions"><span className="demo-pill">SAMPLE DATA</span><button className="button secondary compact" onClick={openVerify}>Open public check <ArrowRight size={14}/></button></div></div>
          {section==="overview" && <><div className="metric-grid">{[["Registered organisations","03","Illustrative network"],["Product records","04","Across sample categories"],["Issued unit identities","12,480","Demo counter only"],["Verification events","8,942","+12.4% · simulated"]].map(([l,v,s])=><div className="metric-card" key={String(l)}><div className="metric-top"><span>{l}</span><Activity size={17}/></div><strong>{v}</strong><small>{s}</small></div>)}</div>
            <div className="content-grid"><div className="data-card"><div className="card-heading"><div><h3>Recent verification activity</h3><p>Illustrative event records</p></div><Status tone="green">Sample feed</Status></div><div className="table-wrap"><table><thead><tr><th>Credential</th><th>Product</th><th>Result</th><th>Time</th></tr></thead><tbody><tr><td>NX-••••-0184</td><td>Milk powder 14g</td><td><Status tone="green">Recognised</Status></td><td>09:42</td></tr><tr><td>NX-••••-0185</td><td>Cereal blend</td><td><Status tone="amber">Review</Status></td><td>09:18</td></tr><tr><td>NX-••••-0186</td><td>Vegetable oil 1L</td><td><Status tone="green">Recognised</Status></td><td>08:57</td></tr><tr><td>NX-••••-0187</td><td>Toothpaste 100ml</td><td><Status tone="red">No match</Status></td><td>08:31</td></tr></tbody></table></div><p className="table-footnote">Events and timestamps are fictional sample data.</p></div>
            <div className="data-card"><div className="card-heading"><div><h3>Onboarding pipeline</h3><p>Illustrative manufacturer records</p></div></div>{[["Profile created",3],["Evidence submitted",2],["Under review",2],["Approved for activation",0]].map(([t,v])=><div className="pipeline-row" key={String(t)}><span>{t}</span><b>{v}</b></div>)}<div className="callout-small"><FileCheck2 size={16}/> No manufacturer is represented as a real partner or approved participant.</div></div></div>
            <div className="data-card"><div className="card-heading"><div><h3>Operational principles</h3><p>Controls intended for the production platform</p></div></div><div className="principle-grid"><span><Check/> SKU-level origin evidence</span><span><Check/> Unique unit credentials</span><span><Check/> Role-based access</span><span><Check/> Human-reviewed risk signals</span></div></div>
          </>}
          {section==="organisations" && <div className="data-card"><div className="card-heading"><div><h3>Manufacturer register</h3><p>Illustrative onboarding records — not actual partners</p></div><Button variant="secondary">+ New organisation</Button></div><div className="table-wrap"><table><thead><tr><th>Organisation</th><th>Location</th><th>Category</th><th>Stage</th></tr></thead><tbody>{manufacturers.map(m=><tr key={m.name}><td><div className="org-cell"><span>{m.initials}</span><b>{m.name}</b></div></td><td>{m.location}</td><td>{m.category}</td><td><Status tone="amber">{m.status}</Status></td></tr>)}</tbody></table></div><div className="callout-small"><FileCheck2 size={16}/> Production onboarding should verify the legal entity, facility, exact SKU origin, supporting records and current regulatory information where applicable.</div></div>}
          {section==="products" && <div className="data-card"><div className="card-heading"><div><h3>Product & SKU registry</h3><p>Product variants are assessed individually</p></div><Button variant="secondary">+ Register product</Button></div><div className="table-wrap"><table><thead><tr><th>Product</th><th>Manufacturer</th><th>SKU reference</th><th>Category</th><th>Stage</th></tr></thead><tbody>{products.map(p=><tr key={p.code}><td><b>{p.name}</b></td><td>{p.maker}</td><td>{p.code}</td><td>{p.category}</td><td><Status tone="amber">{p.status}</Status></td></tr>)}</tbody></table></div><div className="callout-small"><AlertTriangle size={16}/> Product records shown here are fictional. Product activation would require documented domestic manufacture or processing evidence.</div></div>}
          {section==="batches" && <div className="data-card"><div className="card-heading"><div><h3>Production groups & unit identities</h3><p>Illustrative traceability structure</p></div><Button variant="secondary">+ Create production group</Button></div><div className="table-wrap"><table><thead><tr><th>Group reference</th><th>Product</th><th>Facility</th><th>Unit credentials</th><th>Status</th></tr></thead><tbody><tr><td>PG-NX-2026-001</td><td>Milk powder 14g</td><td>Sample Lagos facility</td><td>5,000</td><td><Status tone="green">Demo active</Status></td></tr><tr><td>PG-NX-2026-002</td><td>Cereal blend</td><td>Sample Ogun facility</td><td>3,200</td><td><Status tone="amber">Review</Status></td></tr><tr><td>PG-NX-2026-003</td><td>Vegetable oil 1L</td><td>Sample Lagos facility</td><td>4,280</td><td><Status tone="green">Demo active</Status></td></tr></tbody></table></div><div className="callout-small"><Fingerprint size={16}/> Each saleable unit is intended to receive an unpredictable, unique credential. The QR code is only its carrier.</div></div>}
          {section==="verifications" && <div className="data-card"><div className="card-heading"><div><h3>Verification event explorer</h3><p>Consumer checks recorded against sample credentials</p></div><Status tone="blue">Simulated events</Status></div><div className="event-summary"><div><b>8,942</b><span>Total sample events</span></div><div><b>96.8%</b><span>Recognised sample credentials</span></div><div><b>17</b><span>Illustrative review queue</span></div></div><div className="table-wrap"><table><thead><tr><th>Event reference</th><th>Credential</th><th>Outcome</th><th>Channel</th><th>Review</th></tr></thead><tbody><tr><td>EVT-10042</td><td>NX-••••-0184</td><td><Status tone="green">Recognised</Status></td><td>Mobile web</td><td>Not required</td></tr><tr><td>EVT-10041</td><td>NX-••••-0185</td><td><Status tone="amber">Review</Status></td><td>Mobile web</td><td>Queued</td></tr><tr><td>EVT-10040</td><td>NX-••••-0186</td><td><Status tone="green">Recognised</Status></td><td>Retail web</td><td>Not required</td></tr></tbody></table></div></div>}
          {section==="risk" && <div className="data-card"><div className="card-heading"><div><h3>Risk review queue</h3><p>Signals that may warrant investigation — not automated findings</p></div><Status tone="amber">2 sample cases</Status></div><div className="risk-case"><div className="risk-icon"><AlertTriangle/></div><div><b>Repeated credential activity</b><p>Sample credential NX-••••-0185 shows an unusual verification pattern in the demo data.</p><small>Suggested next step: review event context and supporting evidence.</small></div><Status tone="amber">Open</Status></div><div className="risk-case"><div className="risk-icon"><Search/></div><div><b>Unrecognised credential attempts</b><p>Multiple unmatched code entries are grouped for operational review.</p><small>Suggested next step: assess source patterns without making a counterfeit determination.</small></div><Status tone="blue">Triage</Status></div><div className="callout-small"><ShieldCheck size={16}/> Risk indicators are decision-support signals. A human investigation and appropriate evidence are required before any conclusion.</div></div>}
          {section==="integrations" && <div className="data-card"><div className="card-heading"><div><h3>Developer integration surface</h3><p>Proposed API capabilities — not connected to a live service</p></div><Status tone="blue">Concept</Status></div><div className="endpoint-list">{[["POST","/v1/organisations","Register a manufacturer organisation"],["POST","/v1/products","Create a product and variant record"],["POST","/v1/production-groups","Register a production group"],["POST","/v1/units/issue","Issue unit credentials"],["GET","/v1/verify/{credential}","Check a public credential"],["POST","/v1/events","Ingest a verification event"]].map(([method,path,desc])=><div key={path}><code>{method}</code><b>{path}</b><span>{desc}</span></div>)}</div><div className="callout-small"><Code2 size={16}/> Authentication, tenant isolation, rate limits, audit events and secure credential issuance belong in the production backend.</div></div>}
          <div className="workspace-disclaimer">Prototype only · Sample records and metrics are illustrative · No live integrations, manufacturer accounts or production credentials.</div>
        </div>
      </div>
    </main>}

    <footer className="footer"><div className="footer-main"><div><Brand/><p>Proposed product identity, verification and traceability infrastructure for qualifying products manufactured or processed in Nigeria.</p></div><div><b>Explore</b><button onClick={() => setPage("home")}>Platform overview</button><button onClick={() => openWorkspace()}>Workspace preview</button><button onClick={openVerify}>Consumer verification</button></div><div><b>Project status</b><p>Early product prototype<br/>Working project label<br/>No live manufacturer network</p></div></div><div className="footer-bottom"><span>© 2026 Project Nexus · Internal working name</span><span>Prototype concept · Not a live production service</span></div></footer>
  </div>;
}