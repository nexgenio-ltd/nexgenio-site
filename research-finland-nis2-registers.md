# Finland — Public Registers for NIS2 In-Scope Entity Enumeration

Research date: 2026-10-13. Prepared for NexGenio outbound target-list build.
Banking (Annex I §3) and Financial Market Infrastructures (Annex I §4) excluded per scope instructions.

All claims are sourced inline. Where Perplexity could not locate an official source, this is stated explicitly — nothing below is filled from unverified prior knowledge unless flagged "UNVERIFIED."

**Administrative-reform flag:** Effective **1 January 2026**, a new agency — the **Finnish Supervisory Agency (Lupa- ja valvontavirasto, "LVV")** — took over most of **Valvira's** and the **Regional State Administrative Agencies' (AVI)** environmental/social-welfare/healthcare supervisory tasks, plus the waste-management register from ELY Centres. Several registers below (Soteri/JulkiSoteri, Waste Management Register) are now operated under LVV even though older documentation still references Valvira/AVI/ELY.
Source: https://www.vesi.fi/en/water-topics/finnish-supervisory-agency/ ; https://lvv.fi/en/-/the-waste-management-register-information-can-be-found-in-the-waste-management-compass

---

## 1. Competent-authority register(s) of essential/important entities

**Lead authority:** The **National Cyber Security Centre Finland (NCSC-FI / Kyberturvallisuuskeskus)**, part of **Traficom**, is the central supervisory body coordinating NIS2 ("Cybersecurity Act," kyberturvallisuuslaki) implementation, but **sector-specific supervisory authorities register their own entities separately** — e.g. Fimea for health/pharma, Energiavirasto for energy. An entity operating in multiple sectors must register with each relevant authority.
Sources: https://kyberturvallisuuskeskus.fi/en/register-traficoms-list-nis-2-entities ; https://kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/nis2-european-union-cybersecurity-directive ; https://fimea.fi/en/supervision/cybersecurity

**Mechanism:** Self-registration/notification. Entities must assess whether they fall within Section 3 of the Cybersecurity Act (124/2025) and, if covered, submit a notification containing: legal name and contact details; sector, subsector and entity type; Finnish establishment/main-establishment address; other EU establishment addresses where relevant; Member States where covered services are provided; IP ranges; whether the entity is "essential" or "important"; and participation in voluntary cybersecurity information-sharing arrangements.
Source: https://kyberturvallisuuskeskus.fi/en/register-traficoms-list-nis-2-entities

**Public or confidential:** **Confidential — not a public list.** Traficom's own privacy notice for the "NIS2 toimijaluettelo" (NIS2 entity list) describes it as an authority-maintained registry for supervision, situational awareness and cooperation. It does **not** provide a public searchable directory of registered organisations or their essential/important status. Information could in principle be requested under Finland's Act on the Openness of Government Activities, but disclosure is assessed case-by-case and security-sensitive/personal data may be withheld.
Sources: https://www.traficom.fi/files/media/file/EN_Traficom%20tietosuojaseloste_NIS2_toimijaluettelo.pdf ; https://kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/nis2-european-union-cybersecurity-directive/important-information-european-union-cybersecurity-directive-nis2

**Do not confuse with:** Traficom's separate **public Trusted List** for qualified trust-service providers under eIDAS — that list IS public (see §3, Digital infrastructure, below), but it is not the general NIS2 entity register.
Source: https://kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/electronic-signatures-and-other-eidas-services

**Conclusion for outbound targeting:** The NIS2 entity register itself cannot be used to enumerate named entities. Use it only to confirm *that* a sector is in scope and *which* authority supervises it; actual target discovery must run through PRH/YTJ (§2) and the public sectoral licence/operator lists identified in §3.

---

## 2. National business register — PRH / YTJ (Finnish Patent and Registration Office)

**Name:** Business Information System (**YTJ**), jointly run by **PRH** (Finnish Patent and Registration Office) and the Finnish Tax Administration. Trade Register extracts via PRH's **Virre** service.
**URLs:**
- Company search: https://www.ytj.fi/en/index/companysearch.html
- Open-data API: https://avoindata.prh.fi/en and schema at https://avoindata.prh.fi/opendata-ytj-api/v3/schema?lang=en
- Virre (paid extended service): https://www.prh.fi/en/companiesandorganisations/tietopalvelut/virre.html

**NACE/TOL code exposed and searchable?** The API's `mainBusinessLine.type` field returns a **TOL 2008 code** (Finland's national NACE-derived classification) for each company's main activity. This is a returned **field on the record**, not confirmed as a bulk search filter in the open `/companies` endpoint (which searches by name, municipality, Business ID, or company form) — for NACE-based bulk discovery, cross-reference TOL codes after pulling the full dataset via `/all_companies`.
Source: https://avoindata.prh.fi/opendata-ytj-api/v3/schema?lang=en

**Bulk download / open data / API:** Yes. The **YTJ open-data API** (`https://avoindata.prh.fi/opendata-ytj-api/v3/`) is free, JSON, updated daily, licensed under **CC BY 4.0** (attribution to PRH required). The `/all_companies` endpoint returns the **complete current Trade Register dataset** (including pending companies) as JSON — the closest equivalent to a full bulk export. Also catalogued on avoindata.fi / avoindata.suomi.fi.
Sources: https://avoindata.prh.fi/en ; https://avoindata.suomi.fi/data/en_GB/dataset/prh-avoin-data/resource/c70167a6-2be0-417e-969f-67448fe32cff ; https://www.ytj.fi/en/index/opendata.html ; https://avoindata.suomi.fi/data/en_GB/dataset/prh-avoin-data

**Cost:**
| Product | Price |
|---|---:|
| Open-data API (`/all_companies`, `/companies`, `/description`) | **Free** |
| Basic YTJ company search (web) | **Free** |
| Online electronic Trade Register extract (Virre, incl. directors/signing rights) | **€0** |
| Person-based search (roles/positions by name + DOB) | **€3.14/search** |
| Translated English extract | **€10.67** |
| Financial statements / articles of association / filed documents | **~€5.02/document** |
| Contracted application-service access (automated/bulk via PRH application services) | **€1,882.50 setup fee**, then up to €10.67/search |
Sources: https://www.ytj.fi/en/index/opendata.html ; https://www.prh.fi/en/companiesandorganisations/tietopalvelut/trade_register_extract.html ; https://www.prh.fi/en/companiesandorganisations/tietopalvelut/sahkoisetpalvelut/sovelluspalvelut.html ; https://companydata.com/company-register/finland/

**Exclusions:** The free open-data feed does **not** include email addresses or phone numbers, and excludes private traders, municipalities, wellbeing services counties, and tax partnerships.
Source: https://www.ytj.fi/en/index/opendata.html

**Exact fields exposed:**
| Field | Free API/YTJ | Free Virre extract | Paid Virre products |
|---|---|---|---|
| Legal name (+ name history) | Yes | Yes | — |
| Business ID | Yes | Yes | — |
| Legal form (company form) | Yes | Yes | — |
| Activity/TOL (NACE) code | Yes (main business line, TOL 2008) | Yes | — |
| Registered address / municipality | Yes (municipality/registered office) | Yes | — |
| Employee count / size band | **No** | **No** | Not identified as a standard field |
| Turnover | **No** | **No** | Only via ordered financial-statement documents (~€5.02/doc), not guaranteed for all companies |
| Website/domain | **No** | **No** | Not identified |
| Contact email | **No** | **No** | Not identified |
| Directors/officers (board, MD, auditors, signing rights) | **No** | **Yes** (free Virre extract) | Yes, plus person-based cross-search (€3.14) |
Sources: https://avoindata.prh.fi/opendata-ytj-api/v3/schema?lang=en ; https://www.prh.fi/en/companiesandorganisations/tietopalvelut/trade_register_extract.html ; https://companydata.com/company-register/finland/

---

## 3. Sectoral regulator registers, by NIS2 sector (Banking and FMI excluded)

### Annex I

**1. Energy**
- *Electricity network operators:* Energiavirasto licenses/registers electricity-network operators ("sähköverkkotoiminnan luvanvaraisuus" / "verkkotoiminnan luvanhaltijat"). No single consolidated downloadable register was confirmed; information is distributed across Energiavirasto's licensing pages.
- *Gas network operators:* Similarly regulated under "maakaasuverkkotoiminnan luvanvaraisuus" / "maakaasuverkonhaltijat." No single bulk-downloadable register confirmed.
- *Wholesale electricity/gas market participants:* **REMIT/CEREMP** market-participant register (EU-wide registration mechanism, Energiavirasto is the national competent authority).
- *Electricity market parties generally:* **Fingrid Datahub "Registered Parties"** file lists retail suppliers, DSOs and other grid-operator roles — operated by the TSO (Fingrid), not the regulator, but publicly referenced.
- *District heating/cooling:* Largely a local, closed market; Energiavirasto's role is chiefly guarantees-of-origin for heating/cooling, **not a comprehensive operator-licence register**. **None found** as a public named-operator list.
- *Oil (storage/stockholding):* Energiavirasto oversees Finland's emergency oil-stockholding system, but exact stock locations/quantities are **not published** (security-sensitive). **None found** as a public operator list; use YTJ/TOL-code search (terminal, storage, petroleum-product company lines) as a proxy.
- *Hydrogen:* **None found.** No dedicated Energiavirasto hydrogen-operator register identified; Energiavirasto's industry pages contain individual decisions/permits but not a consolidated register.
- *Historic/reference data:* An older Energiavirasto power-plant register ("voimalaitosrekisteri") is mirrored on third-party open-power-system-data.org as an Excel file, but this is **not confirmed as current or authoritative**.
Sources: https://energiavirasto.fi/en/energy-authority ; https://energiavirasto.fi/sv/marknadsovervakning ; https://palvelut.datahub.fi/api/documents/file/0-309265-1-403757 ; https://data.open-power-system-data.org/conventional_power_plants/2020-10-01/original_data/FI/Energiaviraston%20voimalaitosrekisteri_Fl.xlsx

**2. Transport**
- **Traficom Transport Register** is the central source covering **aviation, rail, maritime/water, and road transport**. It is generally public, and Traficom can disclose operator-licence information (licence code, licence-holder name, validity, contact details) on request/via publication.
- *Air:* Air Operator Certificate (AOC) / operator information available via Traficom's aviation/transport-register disclosure service — not confirmed as a single open downloadable list; request-based.
- *Rail:* Register covers railway operators, rolling stock, and equipment; information requests handled via Traficom.
- *Water:* Register covers ships, watercraft, and maritime operator licences.
- *Road:* Traficom publishes a public page/list of licensed commercial road-transport operators ("transport companies").
- **No single unrestricted bulk-downloadable file covering all four modes was confirmed** — Traficom's open interface limits disclosure to prevent individual/entity-linking in some contexts; for a comprehensive dataset, submit a transport-purpose disclosure request to Traficom.
Sources: https://traficom.fi/en/about-traficom/privacy-policy/registers-and-data-resources ; https://traficom.fi/en/about-traficom/disclosure-information/disclosure-data ; https://www.traficom.fi/en/commercial-transport ; https://static.traficom.fi/en/transport/road/transport-companies

**5. Health**
- **JulkiSoteri** (public face of the **Soteri** register, operated under LVV since the 2026 reform, formerly Valvira) is the national public register of **private** social-welfare and healthcare service providers. It is **public and searchable**, showing: service providers, service units, services/service activities, **responsible persons (vastuuhenkilöt — i.e. named officers)**, and customer/patient target groups. **Contact details are explicitly NOT published** in the initial phase. Public-sector providers (hospitals run by wellbeing services counties) are intended to be added later but may not yet be fully represented.
- **Fimea** regulates pharmaceuticals; it maintains medicine/marketing-authorisation databases but **no single general "pharmaceutical companies register"** equivalent to Soteri — coverage depends on activity (wholesale licence, manufacturing, clinical trials, etc.), spread across several Fimea systems.
Sources: https://valvira.fi/en/search ; https://valvira.fi/-/soteri-rekisterointi-ja-ammattioikeudet-ovat-eri-asioita ; https://lvv.fi/en/healthcare-and-social-welfare/service-provider-register-soteri ; https://fimea.fi/en/databases_and_registers ; https://fimea.fi/en/supervision/cybersecurity

**6. Drinking water**
- **None found** as a single publicly searchable national register of drinking-water suppliers. Supervision data sits with municipal environmental-health authorities under the Drinking Water Decree; Valvira (now largely folded into LVV post-2026) provided national guidance/reporting material but not a company-level public register.
Sources: https://valvira.fi/en/search ; https://www.vesi.fi/en/water-topics/finnish-supervisory-agency/ ; https://www.ytj.fi/en/index/companysearch.html

**7. Waste water**
- **None found** as a single national public register of wastewater-treatment plants/operators. Environmental permits and monitoring data are held by the competent environmental authority (now largely LVV) and may require an information request; commercial industry directories (e.g. overit.fi listings) are **not official registers**.
Source: https://overit.fi/en/companies/industry/viemari-ja-jatevesihuolto/ (flagged as a commercial/unofficial directory, not primary) ; https://www.vesi.fi/en/water-topics/finnish-supervisory-agency/

**8. Digital infrastructure**
- *Telecommunications operators:* Traficom **Telecommunications Register** ("Teleyritysrekisteri") — a **published list** (Finnish) of companies that have submitted a telecom notification, updated periodically. Appears to be a **published list, not a structured searchable/downloadable database**; no official CSV/Excel/API export confirmed.
- *.fi domain registrars:* Traficom publishes a **"largest .fi registrars"** ranking plus a registrar search.
- *DNS service providers:* Traficom runs a **DNS service-provider registration** route for providers of authoritative/public recursive DNS not already covered as .fi registrars.
- *.fi TLD registry:* Operated by Traficom itself under the registry–registrar model (not a third-party operator list).
- *Data centre / cloud providers:* NCSC-FI's digital-infrastructure supervision page identifies these as supervised categories but does **not** provide a public directory of named providers.
- *Trust services:* Traficom's **public Trusted List** (eIDAS) IS public — qualified trust-service providers and their qualified services (signatures, seals, timestamps, validation, e-delivery, website-auth certs).
- *Electronic identification:* Traficom maintains a **public register (incl. an Excel export)** of Finnish-based strong e-ID providers that have notified Traficom, including provider, revocation-service and policy information.
Sources: https://traficom.fi/en/telephone-and-broadband/universal-service-providers/telecommunications-register ; https://www.traficom.fi/en/fi-domains/applying-and-using-fi-domains/view-largest-domain-name-registrars ; https://www.traficom.fi/en/fi-domains/register-dns-service-provider ; https://www.kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/digital-infrastructure-digital-services-and-ict-services ; https://kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/electronic-signatures-and-other-eidas-services ; https://kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/electronic-identification

**9. ICT service management B2B (MSP/MSSP)**
- **None found.** No dedicated sectoral licensing register. NCSC-FI's "Digital infrastructure, digital services and ICT services" page confirms supervisory scope over these entities but points only to the confidential NIS2 entity list (§1), not a public register. Discoverable only via PRH/YTJ TOL codes (likely TOL J62/J63) plus confidential NIS2 self-registration.
Source: https://www.kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/digital-infrastructure-digital-services-and-ict-services

**10. Public administration**
- Not a "licensed operator" sector. NCSC-FI's "Public administration and research organisations" page confirms supervisory scope but **no public operator list** beyond the confidential NIS2 register. Enumerable instead via general government-body directories (e.g. Finland's state/municipal organisation lists), which are not NACE/turnover-style records.
Source: https://kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/public-administration-and-research-organisations

**11. Space**
- **Ministry of Economic Affairs and Employment (TEM)** grants space-activity authorisations and maintains Finland's **Registry of Space Objects**; registration data is also forwarded to the UN Register of Objects Launched into Outer Space. **Traficom** separately handles radio-frequency coordination/licences for satellite and earth-station transmitters and authorises/supervises certain earth-station and radar operations.
- **Reform in progress:** proposed legislation would transfer core space-activity licensing/supervision/register responsibilities from TEM to Traficom — **current authority remains TEM** as of this research date.
- Public-register status of the TEM Registry of Space Objects was **not confirmed as an open searchable database** in the sources found; it is referenced as an official registry, not shown as a bulk-downloadable public dataset.
Sources: https://tem.fi/en/space ; https://practiceguides.chambers.com/practice-guides/space-law-2026/finland/trends-and-developments/O26360 ; https://spacefinland.fi/en/licences-and-supervision ; https://spacefinland.fi/en/space-administration-actors ; https://traficom.fi/en/news/enhancing-security-earth-station-and-radar-operations-space-sector-operations-became-subject-licence

### Annex II

**1. Postal and courier**
- **Traficom Register of postal operations** — a **published list** of operators that have notified Traficom of postal operations involving correspondence items (updated periodically). **Courier delivery of correspondence is expressly excluded from the Postal Act's scope**, so most courier/parcel/logistics companies will **not** appear here even though they may colloquially be called "postal/courier." **Posti Ltd.** is the designated universal-service provider (effectively the only one for most universal postal services). No confirmed bulk CSV/API export; appears to be a web-published list.
Sources: https://www.traficom.fi/en/postal-services-and-delivery/register-postal-operations ; https://traficom.fi/en/postal-services-and-delivery/provision-postal-services-and-development-postal-markets

**2. Waste management**
- **Waste Management Register (jätehuoltorekisteri)**, publicly searchable via **Waste Management Compass (jätehuoltokompassi.fi)**. Covers professional **waste carriers and brokers** (approval required before commercial transport/brokerage under the Waste Act). Public and free for basic searches.
  - Search fields: company/operator name, Business ID, domicile/home municipality, area of operation, waste code/type.
  - Producer-register search also available: producer name, Business ID (or foreign equivalent), producer-responsibility organisation/beverage-packaging return system, authorised representative, product group/producer-responsibility area.
  - Administration post-2026 reform: register data accessible via the Compass; applications/supervision handled by **LVV** or the relevant **ELY Centre** depending on the operator.
  - **Note:** this register covers carriers/brokers, not waste-treatment-facility operators as a separate named list.
Sources: https://lvv.fi/en/-/the-waste-management-register-information-can-be-found-in-the-waste-management-compass ; https://www.ymparisto.fi/en/permits-and-obligations/collection-transport-and-brokerage-waste-within-finland/waste-management-register ; https://jatehuoltokompassi.fi/haetietoja/turre/

**3. Chemicals**
- **Tukes Chemical Products Register**, accessed via **KemiDigi**. Finnish manufacturers/importers of chemicals placed on the Finnish market must notify Tukes; published notifications may include the product's safety data sheet if the notifier permits display. **Not confirmed as a complete public directory of all REACH operators** — described as covering notified dangerous chemical products, not a general company register.
- **REACH substance registration itself is handled by ECHA at EU level**, not Tukes nationally — for an EU-wide manufacturer/importer list, use ECHA's database, not Tukes.
Sources: https://tukes.fi/en/chemicals/operators-and-obligations ; https://tukes.fi/en/chemicals/submitting-information-on-chemicals ; https://www.suomi.fi/services/webpage/the-chemical-products-register-finnish-safety-and-chemicals-agency-tukes/e65f9c7e-87b4-4b1f-8f5b-8711eb3792cb

**4. Food (wholesale and industrial only)**
- **No single fully public, searchable national register** covering every registered food premise. Ordinary registration (including food warehouses, wholesalers, many industrial manufacturers) is held by the **municipal food-control authority**, not centrally searchable.
- **Ruokavirasto (Finnish Food Authority) publishes downloadable spreadsheet lists of APPROVED establishments** (not ordinary-registered ones) for categories requiring EU-level approval: meat, fishery products, milk, eggs, animal-origin warehouses, sprouts, etc. These ARE public/downloadable (XLS).
- For ordinary registered wholesale/industrial operators not requiring "approval," there is **no national public search interface** — must combine Ruokavirasto's approved-establishment spreadsheets with municipality-level information requests.
Sources: https://www.ruokavirasto.fi/en/foodstuffs/food-sector/setting-up-a-food-business/make-an-announcement-of-a-food-business-or-apply-for-an-approval/approved-establishments/ ; https://www.ruokavirasto.fi/globalassets/yritykset/elintarvikeala/toiminnan-aloittaminen/elintarvikehuoneistot/liha-alan_laitokset.xls ; https://www.ruokavirasto.fi/en/about-us/published-datasets/

**5. Manufacturing (medical devices; NACE/TOL C26–C30)**
- *Medical devices:* **EUDAMED** (EU-level public register) is the primary public source for Finnish manufacturers, authorised representatives, importers, and certain system/procedure-pack operators — searchable by actor name, country, SRN, etc. **Fimea's national CERE register** covers Finnish operators/devices NOT in EUDAMED (certain custom-made-device manufacturers, self-manufacturing healthcare institutions, distributors) — Fimea publishes operator lists rather than a live public search interface comparable to EUDAMED. **Valvira is NOT the medical-device authority** — Fimea is.
- *NACE/TOL C26–C30 generally (non-medical manufacturing):* **None found** as a dedicated sectoral register; use PRH/YTJ TOL-code data (§2) as the only available national-level filter.
Sources: https://fimea.fi/en/medical-devices/registrations ; https://fimea.fi/en/medical-devices/registrations/device-and-operator-notifications-to-eudamed ; https://fimea.fi/en/medical-devices/notifications-and-applications

**6. Digital providers (marketplaces, search engines, social networks under Annex II)**
- **None found** as a consolidated official public register. NCSC-FI's digital-infrastructure/digital-services supervision page (same URL as Annex I §8 above) confirms these entities fall under its NIS2 supervisory scope, but there is no dedicated public list — only the confidential NIS2 self-registration (§1).
Source: https://www.kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/digital-infrastructure-digital-services-and-ict-services

**7. Research**
- Not a licensed activity; no sectoral register. NCSC-FI's "Public administration and research organisations" supervisory page (same as Annex I §10) confirms scope but points only to the confidential register. Enumerable via known named public research institutions (universities, VTT, etc.) and government-body directories, not a structured searchable database with fields.
Source: https://kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/public-administration-and-research-organisations

---

## 4. Field-availability summary matrix

| Field | NIS2 register (§1) | PRH/YTJ (§2) | Sectoral registers (§3) |
|---|---|---|---|
| Legal name | Collected, not published | Yes | Varies — yes where a named list exists (JulkiSoteri providers, Traficom telecom/postal/transport lists, Tukes KemiDigi notifications, Ruokavirasto approved establishments, EUDAMED, Waste Management Compass) |
| Business ID | Collected, not published | Yes | Yes, where the register is company-level (Waste Management Compass, EUDAMED SRN, Fimea CERE) |
| Legal form | Collected, not published | Yes | Not generally |
| Activity/TOL-NACE code | Collected, not published | Yes (TOL 2008, as a record field) | N/A — sector is implicit in most registers; waste codes shown in Waste Management Compass are waste-type codes, not NACE |
| Registered address | Collected, not published | Yes (registered office/municipality) | Varies (domicile/municipality in Waste Management Compass; not generally for telecom/postal lists) |
| Employee count/size band | Collected (via NIS2 self-assessment), not published | **No** | Not identified in any sectoral register found |
| Turnover | Collected (via NIS2 self-assessment), not published | **No** (only via paid financial-statement document order, not guaranteed) | Not identified |
| Website/domain | Not confirmed | **No** | Not identified (exception: .fi registrar/TLD pages concern domains generally, not per-company websites) |
| Contact email | Collected (security contact), not published | **No** | **Explicitly excluded** from JulkiSoteri in initial phase; some Traficom telecom/postal notification fields may include operator contact email per privacy-notice description, but not confirmed as publicly displayed |
| Directors/officers | Not confirmed | **Yes** — free Virre Trade Register extract (board, MD, auditors, signing rights) | **Yes** for JulkiSoteri (named "responsible persons"/vastuuhenkilöt); not identified elsewhere |

---

## 5. NIS2 transposition status

- **Law:** Finland transposed NIS2 via the **Cybersecurity Act (Kyberturvallisuuslaki, 124/2025)**, which entered into force **8 April 2025**.
Sources: https://traficom.fi/en/news/cybersecurity-act-passed-parliament-obligations-under-nis-2-directive-enter-force-8-april-2025 ; https://www.finlex.fi/fi/lainsaadanto/saadoskokoelma/2025/124

- **Registration duty:** Yes. In-scope entities had to register with the competent sectoral supervisory authority's entity list within **one month of entry into force, i.e. by 8 May 2025**. Entities operating across several regulated sectors must register separately with each relevant authority. Traficom additionally stated that entities had to have their cybersecurity risk-management procedure in place by **8 July 2025**.
Sources: https://kyberturvallisuuskeskus.fi/en/register-traficoms-list-nis-2-entities ; https://traficom.fi/en/news/cybersecurity-act-passed-parliament-obligations-under-nis-2-directive-enter-force-8-april-2025 ; https://fimea.fi/en/supervision/cybersecurity

- **Article 20(2) management-body training duty:** Transposed as **Section 14** of the Cybersecurity Act (124/2025). Management must ensure it has **sufficient cybersecurity competence** to assess and understand risk-management measures and their impact on services — but the Act does **not** specify a mandated course, number of training days, or exam.
  - **Sanctions regime:** **Section 35** provides for an **administrative fine (hallinnollinen seuraamusmaksu)** where an entity intentionally or through gross negligence neglects risk-management obligations, the risk-management operating model, or its content requirements. The fine is imposed on the **entity**, not automatically on an individual board member, and is determined by a sanctions board (seuraamusmaksulautakunta) on the supervisory authority's proposal.
  - **Maximum fines:** essential entities — **€10 million or 2% of worldwide turnover** (whichever is higher); other (important) entities — **€7 million or 1.4% of turnover**.
  - **No standalone personal fine for "failure to train" was identified.** A board member's non-attendance at training does not by itself appear to constitute an independent fineable offence under the Act's text; however, it can serve as **evidence** that management failed its Section 14 duty of care/oversight, which could feed into a Section 35 administrative-fine case against the entity, or into other supervisory corrective measures (orders to remedy).
Sources: https://www.finlex.fi/fi/lainsaadanto/2025/124/muutoshistoria/20250494 ; https://www.finlex.fi/api/media/statute/690165/mainPdf/main.pdf ; https://www.finlex.fi/fi/lainsaadanto/saadoskokoelma/2025/124

---

## 6. Flags — paywalled / account-gated / low-quality sources encountered

- **PRH Virre extended/application services:** contract + **€1,882.50 setup fee**, then per-search charges up to €10.67 — flagged as paid; the ordinary online extract (incl. directors) is free.
- **overit.fi** (industry/company listings cited for wastewater-sector companies): a **commercial directory, not an official register** — used here only to illustrate absence of an official source; do not treat as authoritative.
- **companydata.com** (fee schedule source for PRH/Virre pricing): a **third-party commercial reseller summarising official PRH prices** — cross-check figures against PRH's own price list (https://www.prh.fi/en/price-lists/hinnasto/tietopalveluhinnasto.html) before relying on exact amounts.
- **data.open-power-system-data.org mirror of "Energiaviraston voimalaitosrekisteri"**: a **third-party academic/open-data mirror** of an older Energiavirasto power-plant register — dated (2018/2020 snapshots), **not confirmed current**, treat as historical reference only.
- **nis2certification.eu, nis-solutions.eu, nis-2-templates.com, blend.training, glocertinternational.com, legiscope.com** (used only in the initial Article 20(2) framing query): these are **third-party compliance-vendor/marketing sites**, not primary legal sources. All final claims in §5 above were cross-verified against **Finlex** (the official Finnish statute database) rather than relying on these vendor pages.
- No confirmed bulk CSV/API export exists for: Traficom's telecom register, Traficom's postal-operations register, Energiavirasto's energy-operator licensing pages, or Ruokavirasto's ordinary (non-approved) food-business registrations — these are published web lists or spreadsheet extracts at best, not structured open-data APIs like PRH/YTJ.

---

## Bottom line for NexGenio outbound targeting in Finland

1. The **NIS2 entity register itself (Traficom/NCSC-FI and each sectoral authority's own list) is confidential** in every sector checked — it cannot be scraped or requested as a ready-made target list.
2. **PRH/YTJ is the strongest base layer**: free daily-updated JSON API with Business ID, legal name, legal form, TOL (NACE) code, and registered municipality; **no employee count, turnover, website, or email** in the free tier; **director/board/MD/signing-rights data IS available free** via the Virre online extract (per-company lookup, not bulk).
3. The most actionable **named public operator lists** found are: **JulkiSoteri** (health providers, including named "responsible persons"), **Waste Management Compass** (waste carriers/brokers, searchable by Business ID/municipality/waste code), **Ruokavirasto's approved-establishment spreadsheets** (meat/dairy/egg/fish facilities), **Tukes KemiDigi** (notified chemical products), **EUDAMED** (medical-device manufacturers/importers), **Traficom's trust-service Trusted List and e-ID register**, and **Traficom's telecom/postal/road-transport published lists** (though most of these are plain web lists, not structured/downloadable databases).
4. **No public operator register at all** was found for: district heating/cooling, hydrogen, drinking water suppliers, wastewater-treatment operators, cloud/data-centre/CDN providers, ICT MSP/MSSP, public administration bodies as a licensed sector, non-medical-device manufacturing (TOL C26–C30), and Annex II digital providers (marketplaces/search engines/social networks) — for all of these, fall back to PRH/YTJ TOL-code filtering as the only national-level discovery mechanism.
5. **Finland's Cybersecurity Act (124/2025) is in force since 8 April 2025**, registration was due **8 May 2025**, and the Article 20(2) management-training duty (Section 14) is a real statutory obligation — but **enforcement runs through the entity-level administrative fine (Section 35, up to €10m/2% or €7m/1.4%), not a standalone personal fine for an untrained director**; non-training is best framed to prospects as evidence risk in a broader governance-failure fine scenario, not an isolated penalty line-item.
