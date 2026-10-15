# Ireland — Public Registers for NIS2 In-Scope Entity Enumeration
Research date: 2026-10-13. Prepared for NexGenio outbound target-list build.

---

## 1. NIS2 Competent Authority Register — PUBLIC OR CONFIDENTIAL?

**No public NIS2 entity register exists in Ireland as of 13 Oct 2026.**

- **Authority:** National Cyber Security Centre (NCSC), under the Department of the Environment, Climate and Communications (DECC) — designated as lead competent authority / single point of contact. Sectoral regulators (ComReg, CRU, etc.) will hold designation power for their own sectors once the law commences.
- **Status:** NIS2 has **not been transposed**. The implementing bill (National Cyber Security Bill) is not enacted. NCSC confirms no registration portal is live and no entity list is published.
- **Confidentiality:** Per NCSC FAQ, once registration opens it will run through a **restricted "NCSC Secure Portal,"** not a public directory. The eventual Article 3(4)/27 list of essential/important entities will be held by competent authorities, not published.
- Sources:
  - https://www.ncsc.gov.ie/nis2/
  - https://www.ncsc.gov.ie/nis2/FAQ/
  - https://www.ncsc.gov.ie/pdfs/NCSC_NIS2_2_ENTITIES.pdf
  - https://www.ncsc.gov.ie/pdfs/NCSC_NIS2_Guide.pdf
  - https://www.comreg.ie/industry/nis2-cer/nis2/about-nis2/

**Fallback / legacy:** the NIS1 (2018 Regulations) Operators of Essential Services register continues to apply to already-designated OES, but this is not published as an open list either (per same NCSC FAQ source above).

---

## 2. National Business Register

**Companies Registration Office (CRO)**

| Attribute | Detail | Source |
|---|---|---|
| Main search portal | CORE — https://cro.ie/services-and-help/core/ | cro.ie |
| Open-data portal | https://opendata.cro.ie/ (CKAN), also mirrored at https://data.gov.ie/dataset/companies | opendata.cro.ie, data.gov.ie |
| NACE codes | **Yes** — open-data CSV/API includes field `nace_v2_code` (NACE Rev. 2), filterable via CKAN `datastore_search` endpoint | https://opendata.cro.ie/dataset/companies/resource/3fef41bc-b8f4-4b10-8434-ce51c29b1bba |
| Bulk download | **Yes, free** — daily CSV snapshot, CC BY 4.0 licence, no fee | https://data.gov.ie/dataset/companies, https://opendata.cro.ie/dataset/?theme=companies |
| API | Free CKAN `datastore_search` API on the open-data portal; separate "CORE Open Services" REST API for live lookups (free, subject to acceptable-use policy) | https://cro.ie/services-and-help/access-to-cro-data/ |
| Licensed bulk service (full extract incl. document images) | **Paid**: €31,000/yr for licensed daily data-update bulk service; €47,520/yr for scanned document images. CRO states it does not offer subsets of this licensed data. | https://cro.ie/publications/cro-re-use-of-info/ |
| Per-document cost (CORE) | €2.50 electronic document image; €3.50 electronic basic company/business-name printout | https://cro.ie/publications/cro-re-use-of-info/ |
| CORE account cost | Free to register | https://cro.ie/services-and-help/core/ |

**Fields exposed:**
- Legal name — Yes (CORE + open data)
- Registration number — Yes
- Legal form — Yes (company type field)
- NACE code — Yes (open data `nace_v2_code`; **not shown on the standard CORE screen**, only in open-data CSV/API)
- Registered address — Yes
- Employee count / size band — **No** standard field. CRO does not expose a size-band or headcount field on the company profile. Employee numbers appear **only inside filed financial statements** (where the filing company's size class requires disclosure — small/micro companies file abridged accounts and often omit this). Source: https://opendata.cro.ie/en_GB/dataset/?organization=companies ; https://www.topograph.co/guides/business-register-in-ireland
- Turnover — **No** on company profile; only inside filed accounts, same caveat as above (CRO Financial Statements open dataset)
- Website / domain — **No**, not a CRO field
- Contact email — **No**
- Directors/officers names — **Yes**, public. Current directors/secretaries are shown via CORE / company filings (annual returns, Form B10 changes); historical/resigned officers require pulling older filings. Source: https://cro.ie/services-and-help/access-to-cro-data/ ; https://www.topograph.co/guides/business-register-in-ireland

Note: Beneficial-ownership data (RBO — Register of Beneficial Ownership) is a separate Irish register; EU-wide public access to beneficial-ownership registers has been restricted since the 2022 CJEU ruling, so treat RBO as **not reliably public** (not independently re-verified in this pass — flagged, not confirmed by pplx in this session).

---

## 3 & 4. Sectoral Regulator Registers, by NIS2 Sector (fields noted inline)

### ANNEX I

**1. Energy**
- **Electricity/gas suppliers & generation licensees** — Commission for Regulation of Utilities (CRU)
  - Suppliers: https://www.cru.ie/consumer-information/switch-supplier/energy-suppliers-in-ireland/ — **Public**, no bulk download identified. Exposes: legal/trading name only (consumer-facing list).
  - Generation licence holders: https://www.cru.ie/regulations-policy/licences/electricity-generation/ — **Public**, list of licence holders; no bulk/API found.
  - District heating/heat-network operators: no live public register yet — legislation provides for one but commencement/publication not confirmed. Source: https://assets.gov.ie/311748/ac9b14e3-8e39-4be6-8b7f-5b3f3149e6ec.pdf
  - Oil, hydrogen: no dedicated CRU public licensee list found in this pass — **none found** (not separately verified; flag for follow-up).

**2. Transport**
- **Air** — Irish Aviation Authority (IAA)
  - AOC holders: https://www.iaa.ie/commercial-aviation/air-operator-certificate-holder — Public, names + contact.
  - Licensed air carriers (Reg. 1008/2008), Category A/B: https://www.iaa.ie/docs/default-source/car-documents/list-of-licensed-operators-a-and-b.pdf — Public PDF, legal name + licence category. No bulk/API.
- **Rail** — Commission for Railway Regulation (CRR)
  - Licensed railway undertakings: https://www.crr.ie/economic-regulation/ — Public; exposes licence number, status, validity dates, undertaking name. No bulk/API found.
- **Water (maritime)** — Department of Transport
  - State port companies listed under "Bodies under the aegis of the Department of Transport": https://www.gov.ie/en/department-of-transport/organisation-information/bodies-under-the-aegis-of-the-department-of-transport/ — Public, names only (Dublin Port Co., Port of Cork, Port of Waterford, Shannon Foynes Port Co.). Not a licensing register — just an aegis-body list.
  - Shipping/ship registration: guidance only found (https://assets.gov.ie/static/documents/guidance-notes-on-the-registration-of-irish-ships.pdf) — searchable register not confirmed in this pass.
- **Road** — Road Safety Authority (RSA) / Department of Transport
  - Road Transport Operator Licence (RTOL) — haulage & passenger/bus operators over certain thresholds: portal at https://www.rtol.ie/rtol-online/ ; RSA info page https://www.rsa.ie/services/business-operators/road-transport-operator-license — **Portal exists but public searchability not confirmed**; appears to be an application/licensing system more than an open public search. Treat as "unclear — verify directly," not a confirmed open register.
  - National Transport Authority PSO bus/rail operator contracts: https://www.nationaltransport.ie/commercial-bus-services/useful-contacts-and-information/ — partial, not a structured register.

**5. Health**
- HIQA "Find a Centre" register (designated/registered healthcare & social-care centres): https://www.hiqa.ie/find-a-centre — **Public**, fields: centre name, centre type, centre ID.
- HSE Health Directory (via HIQA documentation): site ID, Healthlink ID, name, address, phone, email, facility ID, service/setting type, county, Eircode, coordinates, registration ID, registered provider, occupancy, status — described as a broader directory, but **access/public status of the full directory is unclear** — the HIQA description page documents the fields but the directory itself may sit behind HSE systems. Source: https://www.hiqa.ie/areas-we-work/health-information/data-collections/health-directory
- Some HIQA designated-centre datasets are flagged as **protected/personal-data** in the government data catalogue — not fully open. Source: https://datacatalogue.gov.ie/dataset/?theme=Health&page=4

**6. Drinking water & 7. Waste water**
- Uisce Éireann (national utility, formerly Irish Water) Open Data: https://www.water.ie/open-data — **Public**, downloadable XLSX of Water Treatment Plants and Wastewater Treatment Plants. Fields: plant name, local-authority area, design capacity, treatment description, operator, asset reference.
- EPA wastewater discharge authorisations: https://www.epa.ie/our-services/licensing/waste-water/wastewater-discharge-authorisation/ — Public licence search, not a simple name list.
- Note: Ireland's public water/wastewater service is a single national utility (Uisce Éireann) rather than many competing licensees, so sector enumeration is short by design.

**8. Digital infrastructure**
- **Electronic communications networks/services (general authorisation)** — ComReg's Electronic Register of Authorised Undertakings (ERAU): https://www.comreg.ie/industry/licensing/general-authorisation/search-erau/ ; open-data mirror https://datacatalogue.gov.ie/dataset/electronic-register-of-authorised-undertakings — **Public, and open-data listed** (bulk-download status of the open-data mirror not separately confirmed, but it is catalogued as open data). Fields reported: undertaking/provider name, trading name, postal/registered address, **company registration number**, phone, **website**, related companies, network/service category, service description, geographic coverage, public-availability flag, commencement date, register ID. This is the richest field-set found across all Irish sectoral registers — includes CRO number and website, which most others lack.
- **TLD (.ie)** — IEDR accredited registrar list: https://www.iedr.ie/register-a-domain/accredited-registrar-list/ — Public, but this is a list of ~accredited registrars, NOT of .ie domain registrants/holders. Not useful for entity enumeration.
- **Trust services (eIDAS)** — Ireland's National Trusted List, maintained by DECC: human-readable at https://www.gov.ie/en/department-of-culture-communications-and-sport/publications/trust-service-providers/ ; machine-readable XML at https://eidas.gov.ie/Irelandtslsignedv6.xml — **Public**, machine-readable (XML) = effectively a free structured pull. Fields: provider name, service type, status, certificate/trust anchors (standard eIDAS Trusted List schema).
- **IXP, DNS (general), cloud, data centre, CDN** — **none found.** No dedicated Irish public regulator register for IXPs, cloud providers, data centres, or CDNs. Data-centre enumeration in Ireland currently relies on combining IDA Ireland sector/investor pages (not a register) with CRO entity lookups — not a sectoral regulator pull. Source: no register found; IDA material is promotional, e.g. https://enterprise.gov.ie/en/publications/publication-files/national-space-strategy-for-enterprise-2019-2025-fourth-progress-report.pdf (space, for comparison) and general IDA sector pages.

**9. ICT service management (B2B — MSPs/MSSPs)**
- **None found.** No Irish sectoral licensing/authorisation register for managed service providers or managed security service providers. These entities are ordinary CRO-registered companies with no sector-specific public list.

**10. Public administration**
- No NIS2-specific list. Closest official inventory: CSO Register of Public Sector Bodies — Central Government: https://www.cso.ie/en/releasesandpublications/ep/p-rpbi/registerofpublicsectorbodies2024-final/centralgovernment/ — **Public**, lists central government bodies (names, classification). NIS2 public-administration scope (central government, optionally regional/local) is not identical to this CSO classification — use as a proxy, not a definitive scope list. Source for scope caveat: https://www.ncsc.gov.ie/pdfs/NCSC_NIS2_2_ENTITIES.pdf

**11. Space**
- **None found** as a licensing/authorisation register. Enterprise Ireland / Space Ireland maintain an "Irish Space Industry Directory" as an industry-promotion directory, not a regulatory register: referenced in https://enterprise.gov.ie/en/publications/publication-files/national-space-strategy-for-enterprise-2019-2025-fourth-progress-report.pdf. NIS2 scope here is specifically "operators of ground-based infrastructure," which is a narrow definition not mapped to this directory.

### ANNEX II

**1. Postal and courier**
- ComReg Register of Authorised Postal Service Providers: https://www.comreg.ie/industry/postal-regulation/authorised-postal-providers/authorised-postal-providers-register/ ; catalogued at https://datacatalogue.gov.ie/dataset/register-of-postal-service-providers — **Public**. Fields: trading name, services claimed/notified, notification details. Bulk download not confirmed (catalogued as a dataset, but direct CSV/API access not verified in this pass).

**2. Waste management**
- EPA Licence/Permit search (LEAP): https://www.epa.ie/our-services/licensing/licencesearch/ — **Public** search by reference number, applicant name/address, List-of-Waste code, issuing local authority, county, facility type, status.
- Licensed Waste Facilities open dataset: https://data.gov.ie/dataset/licensed-waste-facilities — **Public, bulk/open data**. Fields: EPA registration code, facility name, facility type, address, coordinates, principal activity.
- National Waste Collection Permit Office (NWCPO) register of waste collection permits — referenced but direct search URL not captured in this pass; see https://www.epa.ie/our-services/licensing/waste/.

**3. Chemicals**
- HSA Seveso/COMAH Register (List of Establishments — Upper & Lower Tier): https://www.hsa.ie/eng/your_industry/chemicals/legislation_enforcement/comah/information_to_the_public/list_of_establishments/ — **Public**. Fields: establishment name, tier (upper/lower), location, dangerous-substance hazard categories, and site-specific public-information documents (named substances in some cases). No bulk/API identified.
- REACH: no single Irish public registrant list — HSA/EPA/DAFM are competent authorities but registration data sits with ECHA at EU level, not an Irish public register. Source: https://www.epa.ie/our-services/monitoring--assessment/waste/chemicals/reach/

**4. Food (wholesale and industrial only)**
- FSAI-coordinated approved-establishment lists (actual registers run by HSE, DAFM, SFPA, local authorities under FSAI's official-controls framework):
  - HSE-approved establishments: https://oapi.fsai.ie/HSEApprovedEstablishments.aspx — **Public** search. Fields: approval number, premises trading name, address, county, primary business type, activity, species.
  - Local-authority-approved establishments: https://oapi.fsai.ie/LAApprovedEstablishments.aspx — **Public** search, same field set.
  - Caveat: these lists are oriented to **approved** (mainly manufacturing/processing) premises; general wholesale notification is not guaranteed to appear in a single public directory. Source: https://www.fsai.ie/enforcement-and-legislation/official-controls/mancp/approved-food-premises

**5. Manufacturing (medical devices; NACE C26–C30)**
- Medical devices: HPRA registration is an **application/registration process**, not an open public searchable database. National HPRA registration numbers and EU-level EUDAMED Single Registration Numbers (SRN) exist, but HPRA does not publish an open manufacturer-search directory; confirmation must be requested directly from HPRA. Sources: https://www.hpra.ie/regulation/medical-devices/manufacturers-and-authorised-representatives/manufacturer-registration ; https://www.hpra.ie/regulation/medical-devices/manufacturing-facilities/manufacturing-facilities
- NACE C26–C30 (general manufacturing) — **no sectoral regulator register**; use the CRO/NACE open-data pull described in Section 2 above, filtering on NACE Rev.2 codes within C26 (computer/electronic/optical), C27 (electrical equipment), C28 (machinery), C29 (motor vehicles), C30 (other transport equipment).

**6. Digital providers** (online marketplace, search engine, social network)
- Coimisiún na Meán (Ireland's Digital Services Coordinator under the DSA) — list of Online Platform and Search Engine Services whose providers are established/legally represented in Ireland: https://www.cnam.ie/industry-and-professionals/online-safety-framework/digital-services-act/what-are-the-obligations-for-service-providers/online-platform-and-search-engine-services/ — **Public** (page states the categories covered; exact field set / downloadable list format not confirmed in this pass — treat as a published list requiring direct inspection). A **separate** Online Safety Code "Register of designated online services" also exists under Coimisiún na Meán: https://www.cnam.ie/industry-and-professionals/online-safety-framework/online-safety-code/register-of-designated-online-services/ — do not conflate the two; the DSA list is the NIS2-relevant one.

**7. Research**
- **None found.** No Irish sectoral regulator register of "research organisations" for NIS2 purposes. Universities/research bodies would need to be sourced from HEA (Higher Education Authority) institution lists or CRO, neither of which is a NIS2-specific register.

---

## 5. NIS2 Transposition Status — Ireland

| Question | Answer | Source |
|---|---|---|
| Is the national law in force? | **No.** Ireland missed the 17 October 2024 transposition deadline. The National Cyber Security Bill (intended transposing legislation) is not yet enacted as of 13 Oct 2026. | https://digital-strategy.ec.europa.eu/en/policies/nis2-directive-ireland ; https://www.ncsc.gov.ie/nis2/FAQ/ |
| Infringement action | The European Commission referred Ireland to the CJEU on **8 July 2026** for failure to notify full transposition. | (per pplx summary citing digital-strategy.ec.europa.eu and nis-2-directive.com — flagged: exact referral date not independently cross-checked against a primary EU Commission press release in this pass; corroborate before quoting externally) |
| Competent authority (designate) | NCSC, DECC — intended lead CA/single point of contact; sector regulators to handle their own sectors. | https://www.ncsc.gov.ie/nis2/ ; https://www.comreg.ie/industry/nis2-cer/nis2/nis2-faqs/ |
| Registration duty | **No current statutory registration duty.** NCSC states registration will open only once the Bill is enacted and deadlines are published. | https://www.ncsc.gov.ie/nis2/FAQ/ |
| Deadline applying now | **None in force.** Original EU deadline (17 Oct 2024) has passed without Irish transposition; no new Irish statutory deadline published as of this research date. | https://www.ncsc.gov.ie/nis2/ ; https://nisd2.eu/en/wiki/timelines-and-status/nis2-status-ireland |
| Article 20(2) management-body training duty — separately enforceable/fineable? | Under the **proposed** Irish framework (General Scheme, not yet enacted): the duty itself is mandatory, but there is **no standalone automatic fine for a missed training session**. Enforcement runs through the general infringement/fine structure (up to €10m/2% global turnover for essential entities; €7m/1.4% for important entities) and **personal director/officer liability** only where the individual's "consent, connivance, or wilful neglect" (or gross negligence, per explanatory material) contributed to the underlying infringement. Temporary management bans are also proposed for serious/continuing non-compliance. **None of this is enacted law yet** — it describes the General Scheme / NCSC guidance, not a definitive statutory penalty. | https://www.matheson.com/insights/nis-2-a-new-era-for-management-bodies/ ; https://www.williamfry.com/knowledge/nis2-a-game-changer-for-senior-management-and-boards/ ; https://www.twobirds.com/en/insights/2026/ireland/nis2-and-ireland's-national-cyber-security-bill-what-management-boards-must-know-and-do ; https://www.ncsc.gov.ie/pdfs/NCSC-Cyber-Governance-Management-Boards.pdf |

---

## Summary for outbound targeting

1. **There is no shortcut NIS2 list for Ireland** — no public register of designated essential/important entities exists, and none will until the Bill is enacted and deadlines published. Build the target list bottom-up from sectoral registers + CRO/NACE filtering.
2. **Best single tool: CRO Open Data (NACE Rev.2, free, bulk CSV/API)** combined with **ComReg's ERAU** (best field-richness of any sectoral register — includes CRO number and website) for digital infrastructure/electronic comms, Annex I-8.
3. **Strongest sectoral pulls with real bulk/open data:** CRO company register, EPA Licensed Waste Facilities dataset, Uisce Éireann Open Data, ComReg ERAU/postal register, DECC eIDAS Trusted List XML.
4. **Weakest/no coverage:** ICT managed services (Annex I-9), space (Annex I-11), research (Annex II-7), cloud/data centre/CDN (Annex I-8 subset), medical devices manufacturer directory (Annex II-5 medical devices specifically) — none have a public regulator register; these sectors require direct CRO/NACE-code sourcing or manual market research (e.g., IDA Ireland promotional material for data centres).
5. **No register exposes turnover, employee count/size band, or contact email directly** — these must be derived from CRO filed financial statements (patchy, size-class dependent) or third-party/commercial enrichment, not from any public Irish government register identified in this research.
6. **Flagged for follow-up / not fully verified in this pass:** RTOL public searchability (road transport operators); RBO (beneficial ownership) public-access status post-CJEU; exact CJEU referral date for Ireland's NIS2 infringement; downloadable field-level detail for the Coimisiún na Meán DSA platform list; oil and hydrogen sub-sector CRU registers.
