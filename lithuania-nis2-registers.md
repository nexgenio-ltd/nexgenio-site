# Lithuania — Public Registers for NIS2 In-Scope Entity Enumeration

Research date: 2026-10-13. Banking and Financial Market Infrastructures (Annex I.3–4) excluded per brief.

---

## 1. Competent authority register (NKSC)

- **Authority:** Nacionalinis kibernetinio saugumo centras (NKSC) — National Cyber Security Centre, under the Ministry of National Defence. Operational CERT function sits with CERT-LT.
- **Register:** Kibernetinio saugumo subjektų registras ("KSS register"), reachable at `https://www.nksc.lt/kssregistras/`.
- **Status: NOT a usable public enumeration tool.** It was designed as a one-at-a-time, read-only lookup where you enter a single company code (įmonės kodas) to check whether that specific entity is listed as essential/important — it is not a browsable or exportable list. As of this research, NKSC states the KSS-register check has been **disabled**. Source: https://www.nksc.lt/kssregistras/ (cited via https://www.nis-2-templates.com/lithuania-competent-authority/).
- **Underlying list confidentiality:** Entities are identified and placed on the register by NKSC and sectoral authorities (not by self-registration); there is no indication the underlying essential/important entity list itself is published in bulk anywhere. Treat the substantive list as **confidential / not public**.
- General NKSC site: https://www.nksc.lt/ ; contact for status queries: cert@cert.lt / +370 706 82 250 (source: https://digital-strategy.ec.europa.eu/en/policies/nis2-directive-lithuania).
- **Practical conclusion:** NKSC cannot be used to enumerate the target list. It can at best be used defensively, one company code at a time, if the lookup is reactivated — and even then only confirms/denies status, no contact or firmographic fields are exposed.

---

## 2. National business register

**Juridinių asmenų registras (JAR)** — Register of Legal Entities, operated by **Registrų centras** (State Enterprise Centre of Registers).

- Official search portal: https://www.registrucentras.lt/jar/p_en/ (English), https://www.registrucentras.lt/jar/paieska/ (Lithuanian)
- Open-data / API route: https://get.data.gov.lt/datasets/gov/rc/jar/iregistruoti/JuridinisAsmuo (DataGovLT standard query API, JSON)

### Free public web search — fields exposed
Per https://www.registrucentras.lt/jar/p_en/:
- Legal-entity code (registration number) — YES
- Legal name — YES
- Registered address — YES
- Legal form — YES
- Data status / legal status (active, in liquidation, etc.) — YES
- **EVRK (NACE) activity code — NOT shown** in the free public result row
- **Director/manager names — NOT shown** in the free public result row
- Employee count, turnover, website, contact email — not exposed

To get EVRK codes, director names, or full filings, you need a **registered-user service agreement** with Registrų centras (paid, contractual access) — source: https://www.registrucentras.lt/jar/p_en/, https://www.registrucentras.lt/jar/p/.

### Open-data / API route (data.gov.lt) — fields exposed
Dataset: `gov/rc/jar/iregistruoti/JuridinisAsmuo` (schema confirmed via https://get.data.gov.lt/datasets/gov/rc/jar/iregistruoti/JuridinisAsmuo and sample records):
- `ja_kodas` — company code — YES
- `ja_pavadinimas` — legal name — YES
- `pilnas_adresas` / `adresas` — address (may be null/unstructured) — PARTIAL
- `reg_data` / `isreg_data` — registration/deregistration dates — YES
- `forma` — legal form (reference ID, resolve via classifier endpoint `gov/rc/jar/formos_statusai/Forma`) — YES (needs lookup)
- `statusas` — legal status — YES
- **EVRK/NACE activity code — NOT present in this base resource.** A related, less-documented "LegalEntityActivity" expanded dataset is referenced in a data.gov.lt data-request thread (https://data.gov.lt/requests/submitted/) but its live endpoint/schema was not confirmed in this research — treat as unverified/needs direct confirmation with Registrų centras or data.gov.lt support.
- Director/officer names, employee count, turnover, contact email, website — not present in this resource.

### Searchability by NACE/EVRK — bottom line
The **official free interfaces (web search and base open-data API) do not let you filter the whole register by EVRK/NACE code.** Bulk filtering by activity code is only confirmed available through **commercial resellers** (e.g., Innovadata, advertising EVRK-filtered XLSX extracts from ~€0.17/company + 24% VAT — https://innovadata.eu/lithuania-company-database; ImonesMCP, advertising an `activityCode` filter — https://www.imonesmcp.lt/en/docs). These are third-party, not official Registrų centras products — verify currency/accuracy independently.

### Cost summary
| Access | Cost | Fields | Source |
|---|---|---|---|
| Free web search (name/code) | Free | name, code, address, legal form, status | registrucentras.lt/jar/p_en |
| Base open-data API | Free | code, name, address, form, status, dates | get.data.gov.lt |
| Registered-user/contract access | Paid, dataset-dependent | adds EVRK, directors, filings | registrucentras.lt/jar/p |
| Certified extracts / financial statements | ~€3–10 per document (secondary source, unverified against official tariff) | full file | https://lemreveal.com/data/lithuania |
| Commercial EVRK-filtered bulk export | From ~€0.17/company + VAT | code, name, EVRK, address, legal form | https://innovadata.eu/lithuania-company-database |

**Flag:** No confirmed, official, documented bulk-download route exposes EVRK/NACE at scale for free. For sector-code-based list-building, plan on either (a) a paid Registrų centras data agreement, or (b) a commercial reseller extract, cross-checked against the free JAR search for legal status.

---

## 3. Sectoral regulator registers, per Annex I/II sector

### Annex I.1 — Energy (electricity, district heating/cooling, oil, gas, hydrogen)
- **Regulator:** VERT — Valstybinė energetikos reguliavimo taryba (National Energy Regulatory Council).
- **Registers:**
  - Licensing overview: https://vert.lt/en/Pages/licencing.aspx
  - Electricity supply licence/permit holders: https://vert.lt/elektra/Puslapiai/licencijos%20ir%20leidimai/nepriklausomo-elektros-energijos-tiekimo-licencijas-leidimus-turincios-imones.aspx
  - District heating licence holders: https://vert.lt/siluma/Puslapiai/licencijavimas/licenciju-turetojai.aspx
  - Cross-sector licence platform: https://www.licencijavimas.lt/
  - Open-data: https://data.gov.lt/datasets/1697/ and https://data.gov.lt/datasets/1708/
- **Public:** Yes (published licence-holder lists/PDFs).
- **Bulk download:** Partial — open-data datasets exist (data.gov.lt), but confirm per-dataset schema; sector web pages are mostly static lists/PDFs, not a queryable bulk export.
- **Fields typically exposed:** legal name, licence number, company code, address/service territory, licence type. No turnover, employee count, directors, or contact email confirmed.
- **Oil/hydrogen specifically:** not separately confirmed in this research — only electricity, gas, and heat licensing pages were verified. Flag as needing direct VERT follow-up for oil and hydrogen segments.

### Annex I.2 — Transport (air, rail, water, road)
- **Regulator:** LTSA — Lietuvos transporto saugos administracija (Lithuanian Transport Safety Administration).
- **Registers:**
  - Main site/licensing tree: https://ltsa.lrv.lt/en/site-tree/
  - Rail: safety-certificate/authorisation holder lists referenced on LTSA site (exact URL not isolated in this pass).
  - Maritime: Lithuanian Seafarers' Register, Seagoing Ships Register, Inland Waterway Ships Register (linked from LTSA site, https://ltsa.lrv.lt/lt/svetaines-medis/).
  - Public transport (bus/rail) open dataset: https://get.data.gov.lt/datasets/gov/ltsa/viesasis_transportas/
- **Public:** Yes, for most sub-registers.
- **Bulk download:** Yes for the public-transport (VINTRA) dataset via data.gov.lt API; other sub-registers (road haulier licences, rail safety certs) appear to be published as static lists/PDFs rather than bulk-exportable — not confirmed otherwise.
- **Fields:** operator/company name, licence or certificate type, vessel/registration details (maritime). NACE codes, employee counts, turnover, directors — not confirmed present.
- **Air transport specifically:** no dedicated public register URL was isolated in this research pass — flag as a gap requiring direct LTSA/Civil Aviation follow-up.

### Annex I.5 — Health
- **Regulators:** Two separate registers needed.
  1. Healthcare institution licences (hospitals, clinics) — published as an open dataset on the national portal: https://data.gov.lt/datasets/?selected_facets=category_exact:96&selected_facets=tags_exact:2243
  2. VVKT — Valstybinė vaistų kontrolės tarnyba (State Medicines Control Agency), for pharmacy/pharma licensing: public portal https://vapris.vvkt.lt/vvkt-web/public/, registered-medicines search https://vapris.vvkt.lt/vvkt-web/public/medications?lang=en
- **Public:** Yes.
- **Bulk download:** Yes for the data.gov.lt healthcare-licence dataset (open data). VVKT's VAPRIS system appears to be a search interface rather than a bulk export — not confirmed.
- **Fields:** licensed entity name, licensed address, service type/scope. No turnover, employee count, directors, contact email confirmed.

### Annex I.6 — Drinking water
- **Regulator:** VERT (same body as energy — Lithuania consolidated water-utility economic regulation into VERT).
- **Register:** https://vert.lt/vanduo/puslapiai/geriamojo-vandens-tiekimo-ir-nuoteku-tvarkymo.aspx — publishes individual licence decisions as PDFs (e.g., UAB "Sūduvos vandenys" licence L7-GVTNT-49: https://www.suduvosvandenys.lt/wp-content/uploads/2025/12/Geriamojo-vandens-tiekimo-ir-nuoteku-tvarkymo-veiklos-licencija.pdf).
- **Public:** Yes.
- **Bulk download:** No confirmed single consolidated export — licences are published as individual PDF decisions per operator, not as a structured list. The Lithuanian State Audit Office (https://www.lrs.lt/sip/getfile?guid=4f0e6d66-973a-4932-a86b-21a0a913a219) reports there were 109 drinking-water suppliers, of which 35 reportedly lacked a required licence at the time of audit — useful context but not itself a register.
- **Fields per licence PDF:** legal name, company code, licence number, service territory/municipality. No turnover, employees, directors, contact email.

### Annex I.7 — Waste water
- **Regulator:** VERT (same licensing regime as drinking water — "geriamojo vandens tiekimo ir nuotekų tvarkymo" licences cover both).
- **Register:** same as above, https://vert.lt/vanduo/puslapiai/geriamojo-vandens-tiekimo-ir-nuoteku-tvarkymo.aspx. Lithuania had 68 licensed wastewater-treatment operators per the State Audit Office report cited above.
- **Public:** Yes. **Bulk download:** No confirmed consolidated export (same caveat as drinking water).
- **Fields:** same as drinking water entry.

### Annex I.8 — Digital infrastructure
This sector needs splitting by sub-type:
- **IXP:** No dedicated public Lithuanian IXP register was identified in this research. **None found.**
- **DNS / TLD (.lt registry):** DOMREG (Kaunas University of Technology Internet Service Centre) operates the .lt registry.
  - IANA delegation record (authoritative operator/contact data): http://www.iana.org/domains/root/db/lt.html
  - Accredited registrar directory: https://www.domreg.lt/en/registrars/international-accredited-registrars/
  - Public: Yes. Bulk download: the registrar directory is a published list; there is no bulk WHOIS/zone-file export confirmed as publicly available. Fields: registry operator name/address, nameserver/IP data, list of accredited registrars (names only) — no NACE, turnover, employees, directors.
- **Cloud, data centre, CDN:** **None found** — no dedicated Lithuanian public register of cloud/data-centre/CDN providers was identified; these providers would need to be sourced via the business register (JAR) using NACE codes (e.g., J63.11 data processing/hosting) rather than a sectoral licence list.
- **Trust services:** RRT (Ryšių reguliavimo tarnyba — Communications Regulatory Authority) maintains the Lithuanian Trusted List of qualified trust-service providers.
  - https://rrt.lt/veiklos-sritys/skaitmenine-erdve/patikimumo-uztikrinimo-paslaugos/lietuvos-patikimas-sarasas
  - Machine-readable XML: https://rrt.lt/static/files/LT-TSL.xml
  - Public: Yes. Bulk download: Yes (XML file, structured per eIDAS Trusted List schema). Fields: provider legal name, services offered, service status, certificate/identifier data — no turnover, employees, or named directors (eIDAS TSL schema does not carry those).
- **Electronic communications networks/services:** RRT list of providers.
  - https://rrt.lt/en/areas-of-activity/electronic-communications/service-providers/list-of-providers
  - Public: Yes (notification-based list of providers who have notified RRT of starting activity). Bulk download: not confirmed as a structured export (appears to be a published list/table). Fields: provider legal name, notification/service type. No NACE, turnover, employees, directors, contact email confirmed.

### Annex I.9 — ICT service management B2B (MSP/MSSP)
- **None found.** Lithuania does not operate a separate licensing or registration regime for managed service providers or managed security service providers as such. MSSPs/MSPs fall under NIS2 scope assessment and NKSC's (non-public, lookup-only) KSS register, not a sectoral operator licence list. Source: https://nisd2.eu/en/wiki/scope/am-i-msp-nis2, https://nis2certification.eu/lithuania/. Practical approach: enumerate via JAR/business register NACE codes (e.g., J62.0 IT services) plus commercial firmographic filtering — no public sectoral register exists.

### Annex I.10 — Public administration
- No licensing-type register applies (these are government bodies, not licensed operators). The closest public resource is the **Register of Registers and Information Systems** (registrai.lt) and the data.gov.lt classifier of state/municipal institutions not registered as ordinary legal entities: https://data.gov.lt/datasets/?selected_facets=tags_exact:518
- **Public:** Yes. **Bulk download:** Partially — the classifier dataset is published as open data via get.data.gov.lt. **Fields:** institution name, type/classification, status. No turnover, employees, directors, contact email confirmed.

### Annex I.11 — Space
- **None found** in the form of a dedicated, operational public register of licensed/registered space operators. A Lithuanian legal-journal article (https://www.journals.vu.lt/teise/en/article/download/12825/11627) discusses the absence of a public national space-object registry and treats it as a gap needing to be filled, rather than describing a live register. RRT (https://www.rrt.lt/en/) is the likely competent authority for satellite radio-frequency matters but has no published operator list identified in this research. Named operators (e.g., Kongsberg NanoAvionics, SpaceUnion) are known from a CEPT workshop document (https://cept.org/files/2388/8_Kotryna%20Naciene%20LTU%20Satellite%20workshop.pdf), not from a register. Practical approach: use JAR/business register.

---

### Annex II.1 — Postal and courier
- **Regulator:** RRT.
- **Register:** https://rrt.lt/en/areas-of-activity/mail/postal-service-providers (English), https://rrt.lt/veiklos-sritys/pastas/pasto-paslauga/pasto-paslaugu-teikejai (Lithuanian).
- **Public:** Yes — providers must notify RRT before operating; compliant notifiers appear on this list.
- **Bulk download:** Not confirmed as a structured export — appears to be a published list/table on the RRT site.
- **Fields:** provider legal name, notification status. No company code, address, NACE, turnover, employees, directors, or contact email confirmed present.

### Annex II.2 — Waste management
- **Regulator:** Aplinkos apsaugos agentūra (Environmental Protection Agency), via the **State Register of Waste Managers (ATVR)**, administered through the GPAIS system.
- **Register:** https://atvr.am.lt
- **Public:** Yes.
- **Bulk download:** Not confirmed in this pass — ATVR's public-facing export/API capability needs direct verification; background: https://gamta.atlassian.net/wiki/spaces/SDGPAIS/pages/526385153/The+State+Register+of+Waste+Managers+of+the+Republic+of+Lithuania. There is also an open-data presence: https://data.gov.lt/datasets/?selected_facets=creator_exact:31&selected_facets=jurisdiction_exact:16
- **Fields:** entity name, registration/permit type (collection, transport, treatment, storage, brokering, dealing), likely company code. Turnover, employees, directors, contact email not confirmed.

### Annex II.3 — Chemicals
- **None found** at national-register level. Lithuania does not maintain a standalone public national register of REACH-registered companies; registrant data sit centrally with **ECHA** (EU-level, not Lithuania-specific): https://echa.europa.eu/information-on-chemicals. The Lithuanian Environmental Protection Agency (AAA) publishes aggregate statistics only (111 companies, 138 substances, 225 registrations as of 30 April 2025), not a company-level list — source: https://aaa.lrv.lt/public/canonical/1748938161/3655/REACH-CLP_2025-06-02_OtilijaSpuriene.pdf. Practical approach: query ECHA CHEM by substance/registrant, then cross-check each entity in JAR.

### Annex II.4 — Food (wholesale and industrial only)
- **Regulator:** VMVT — Valstybinė maisto ir veterinarijos tarnyba (State Food and Veterinary Service).
- **Register:** published as an open dataset on the national portal: https://data.gov.lt/datasets/802/ (Food Information System data on food-handling operators, including declared activities such as wholesale); browsable catalogue at https://get.data.gov.lt/datasets/gov/vmvt/.
- **Public:** Yes. **Bulk download:** Yes — open dataset, structured.
- **Fields:** operator legal name, declared activity/activity type (should allow filtering wholesale vs. retail), registered address (via linked VMVT records). Company code, NACE, turnover, employees, directors, contact email — not confirmed present in the dataset schema (schema itself not fully inspected in this pass; flag for direct verification before relying on field-level completeness).

### Annex II.5 — Manufacturing (medical devices; NACE C26/C27/C28/C29/C30)
- **Medical devices specifically:** VASPVT — Valstybinė akreditavimo sveikatos priežiūros veiklai tarnyba (State Health Care Accreditation Service) handles medical-device market registration in Lithuania. https://vaspvt.gov.lt/veiklos-sritys/medicinos-priemones. Lithuania currently has **no notified bodies** for MDR/IVDR conformity assessment (source: https://data.kurklt.lt/wp-content/uploads/2025/05/Regulatory-Pathways-for-Medicines-Medical-Devices-and-Novel-Foods.pdf). For EU-level manufacturer/device data, use EUDAMED (https://health.ec.europa.eu/medical-devices-sector/eudamed_en) and the NANDO notified-body list (https://webgate.ec.europa.eu/single-market-compliance-space/#/notified-bodies) — these are EU, not Lithuania-specific, registers.
- **NACE C26–C30 generally (computers/electronics, electrical equipment, machinery, motor vehicles, other transport equipment):** **none found** as a dedicated sectoral licence register — these are ordinary manufacturing NACE codes with no special licensing regime. Practical approach: enumerate via JAR/business register filtered on NACE C26–C30 (see Section 2 limitations on free EVRK filtering).

### Annex II.6 — Digital providers (online marketplaces, search engines, social networking platforms, and the Annex II digital-provider category generally)
- **None found.** No dedicated Lithuanian national licensing register applies to online marketplaces, search engines, or social-networking-platform providers — these are typically large, often non-Lithuania-established entities subject to EU-level DSA/DMA oversight rather than a national licence list. Practical approach: direct identification via known market participants, not a register.

### Annex II.7 — Research
- **Regulator / register:** Švietimo ir mokslo institucijų registras (Register of Education and Science Institutions), administered by the National Agency for Education (NŠA).
- **Register info page:** https://www.nsa.smsm.lt/informaciniu-istekliu-departamentas/registrai/svietimo-ir-mokslo-instituciju-registras/
- **Public searchable interface (AIKOS/KRISIN):** https://www.krisin.smm.lt/aikos2-krisin/public/
- **Public:** Yes. **Bulk download:** Not confirmed — appears to be an interactive search tool (KRISIN) rather than a bulk export; there is a related open-data category at https://data.gov.lt/datasets/?selected_facets=category_exact:115 worth checking directly.
- **Fields:** institution name, institution type (university, research institute, branch, foreign representative office). Address, company code, NACE, turnover, employees, directors, contact email not confirmed present — needs direct inspection of the KRISIN interface.

---

## 4. Field-availability matrix (what each pull actually exposes)

| Source | Legal name | Reg. number | Legal form | Activity/NACE code | Address | Employee/size band | Turnover | Website/domain | Contact email | Directors/officers |
|---|---|---|---|---|---|---|---|---|---|---|
| NKSC KSS register | — | checked (input) | — | — | — | — | — | — | — | — |
| JAR free web search | Yes | Yes | Yes | **No** | Yes | No | No | No | No | **No** |
| JAR open-data API (base) | Yes | Yes | Yes (via classifier) | **No** (confirmed absent in base resource) | Partial (may be null) | No | No | No | No | No |
| JAR paid/contract access | Yes | Yes | Yes | Yes (claimed, not directly verified) | Yes | No (not confirmed) | No (not confirmed) | No | No | Yes (claimed, not directly verified) |
| VERT energy/water licences | Yes | Yes (company code) | No | Implicit (licence type) | Yes (service territory) | No | No | No | No | No |
| LTSA transport registers | Yes | Partial | No | Implicit | Partial | No | No | No | No | No |
| RRT e-comms/postal/trust-service lists | Yes | No (not confirmed) | No | No | No | No | No | No (not confirmed) | No | No |
| VMVT food dataset | Yes | Not confirmed | No | Declared activity type only | Likely (via linked records) | No | No | No | No | No |
| ATVR waste register | Yes | Likely | No | Permit type | Not confirmed | No | No | No | No | No |
| AIKOS/KRISIN research register | Yes | Not confirmed | Institution type | — | Not confirmed | No | No | Not confirmed | No | No |

**Headline conclusion for outbound list-building:** No single Lithuanian public source gives NACE/EVRK + contact fields (email, website) together. The free JAR search gives clean legal-identity data (name, reg. number, legal form, address, status) but *not* activity code, directors, or any contact field. Sectoral regulator lists give sector confirmation and legal name but almost never NACE, turnover, employees, or contact details. Practical workflow: use sectoral lists to confirm "this entity is in-scope by activity," then cross-reference the legal name/code against JAR for identity/status data, and go to a commercial data provider (paywalled) for NACE-code bulk filtering, employee-size bands, turnover, or contact emails/websites — none of these last four fields were found reliably exposed in any Lithuanian **public, free** source reviewed.

---

## 5. NIS2 transposition status

- **National law:** Lithuania transposed NIS2 mainly through amendments to the **Law on Cyber Security of the Republic of Lithuania** (*Lietuvos Respublikos kibernetinio saugumo įstatymas*), amending Law No. XII-1428 via Act No. XIV-2902, adopted 11 July 2024. The amended law entered into force on **18 October 2024** (one source states 17 October — treat as a one-day discrepancy between adoption/publication conventions, not independently resolved in this research).
  - Source: https://www.lexmundi.com/guides/status-of-the-nis2-implementation-act-in-the-european-union/jurisdictions/europe/lithuania/
  - Source: https://cdn.digitaleurope.org/uploads/2025/01/29012025-Updated-overview-of-national-transposition-NIS2-Directive.pdf
- **Implementing cybersecurity-requirements act:** entered into force **12 November 2024** (source: Lexmundi link above).
- **Registration duty:** Lithuania does **not** operate a general self-registration model. NKSC (with sectoral authorities) **identifies and lists** qualifying essential/important entities; entities generally do not register merely because they believe they are in scope. Authorities were expected to complete identification/listing by **17 April 2025**.
  - Source: https://cdn.digitaleurope.org/uploads/2025/01/29012025-Updated-overview-of-national-transposition-NIS2-Directive.pdf
  - Source: https://www.lexmundi.com/guides/status-of-the-nis2-implementation-act-in-the-european-union/jurisdictions/europe/lithuania/
- **Compliance transition periods after listing:** 12 months for organisational/general cybersecurity requirements; 24 months for technical cybersecurity requirements, counted from listing/registration (source: Lexmundi link above; also https://lexlint.io/law/lt).
- **Disputed point — flag:** One secondary tracker (https://www.wavestone.com/en/insight/nis-2-european-countries-transposing-directive/) references a possible separate **"VIRK" platform registration deadline of 1 October 2025**. This was **not corroborated** by the primary sources (Lexmundi, DigitalEurope) reviewed, and should be verified directly with NKSC before being relied upon — do not treat as confirmed.
- **Article 20(2) management-body training duty — enforceable/fineable status:** The duty is real and distinct from the general employee-training encouragement (which is only "encouraged," not mandatory, for staff generally). Per NIS2 Article 20 as summarised at https://www.nis2-info.eu/regulation/nis2/article/20/governance: management-body members of essential/important entities must approve and oversee Article 21 risk-management measures **and complete mandatory training**; management bodies must be capable of being held liable for the entity's Article 21 infringements. The directive-level fine framework (Article 34) — up to €10m/2% global turnover (essential) or €7m/1.4% (important) — attaches primarily to the **entity**, not individually to a director for the training gap per se; whether Lithuania has created a *separate, personal* fine specifically for an individual director's failure to complete training was **not confirmed** in sources reviewed — this requires direct confirmation against the current consolidated text of the Lithuanian Cybersecurity Law and was flagged as unverified even by the secondary source consulted (https://www.nis-2-templates.com/lithuania-penalties-enforcement/, which itself says the exact Lithuanian sanction "must be verified against the current Cybersecurity Act and NKSC enforcement provisions").
  - **Bottom line to act on:** Treat Article 20(2) training as a documented, auditable governance obligation your target's board must be able to evidence (meeting minutes, training records, formal approval of Art. 21 measures) — but do NOT claim in outbound messaging that Lithuania has a confirmed separate personal fine for missed training; that specific point is unverified.

---

## Key gaps / things to verify directly before relying on this for outreach targeting

1. NKSC KSS register lookup is disabled — no way to confirm in-scope status via that channel at present.
2. No official, documented bulk NACE/EVRK filter exists on the free JAR interfaces — bulk sector-code lists require either a paid Registrų centras contract or a commercial reseller.
3. Several sectoral registers (ATVR waste, VMVT food, AIKOS/KRISIN research, RRT e-comms/postal) were confirmed as *public* but their *bulk-export* capability was not independently verified in this pass — direct inspection of each portal's export/API function is recommended before building automated pulls.
4. Air transport and oil/hydrogen energy sub-sectors: no dedicated register URL was isolated — needs direct LTSA/VERT follow-up.
5. IXP, cloud, data centre, CDN, MSP/MSSP, space, and digital-provider (marketplace/search/social) sectors: no Lithuania-specific public register exists — business-register NACE filtering (paid/commercial) is the only enumeration path identified.
6. The "VIRK platform, 1 October 2025" registration-deadline claim is uncorroborated and should not be repeated as fact without checking directly with NKSC.
