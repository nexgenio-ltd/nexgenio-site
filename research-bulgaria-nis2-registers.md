# Bulgaria — Public Registers for NIS2 In-Scope Entity Enumeration

Research date: 2026-10-13. Prepared for NexGenio LTD outbound target-list building.

---

## 1. National NIS2 competent-authority register

**Authority:** The **Minister of e-Government** creates, maintains, and administers the central register of essential and important entities under Bulgaria's amended Cybersecurity Act. The **State e-Government Agency (SEGA)** is Bulgaria's NIS2 single point of contact (SPOC) listed with the European Commission. The **State Agency for National Security (DANS/SANS)** has supervisory/enforcement powers within its statutory remit but does not administer the register itself. Sector-specific competent authorities (Ministry of Energy, Ministry of Transport and Communications, Ministry of Health, Ministry of Environment and Water, etc.) identify entities and notify the Minister of e-Government, who enters them into the register.

**Status: NOT PUBLIC / CONFIDENTIAL.** The register contains identity, address, sector/subsector, contact information, IP ranges, countries of service, and incident-response contact details — explicitly sensitive operational data, which is why it is withheld from public access.
Source: https://kvlaw.bg/en/news/nis2-in-bulgaria-new-cybersecurity-obligations-businesses-should-assess-in-time/

Sector mapping / SPOC listing: https://digital-strategy.ec.europa.eu/en/policies/nis2-directive-bulgaria

PwC transposition note (confirms non-public nature and identification methodology to be adopted by Council of Ministers within 6 months of entry into force): https://legal.pwc.de/content/services/NIS-2/nis-2-bulgaria.pdf

CMS Law summary of the enacted amendments: https://cms.law/en/bgr/legal-updates/bulgaria-adopts-nis2-aligned-cybersecurity-law

**Practical conclusion:** This register cannot be used for outbound list-building — it is not accessible to third parties.

---

## 2. National business register — Commercial Register / BULSTAT (Registry Agency)

**Name:** Commercial Register and Register of Non-Profit Legal Entities (Търговски регистър), plus the BULSTAT register, both operated by the **Registry Agency** (Агенция по вписванията).

**URL:** https://portal.registryagency.bg/en/ (Commercial Register: https://portal.registryagency.bg/en/home-cr )

**Search:** Free, manual search by company name or UIC/EIK (Unified Identification Code). No documented free bulk-download or public REST API from the Agency itself.

**NACE/KID exposure:** Mixed finding across sources.
- One pass of research describes the Commercial Register's structured record as covering name, legal form, registered seat/address, managing bodies/representatives, business "object" (free-text description of activity), partners, and share capital — but **does not clearly confirm a structured NACE/KID code field** on the Commercial Register extract itself.
  Source: https://companydata.com/company-register/bulgaria/ ; https://e-justice.europa.eu/topics/registers-business-insolvency-land/business-registers-eu-countries/bg_en?BULGARIA=&member=1
- The **BULSTAT register** (separate register, same Registry Agency portal) does carry a "main economic activity" field using the Bulgarian **KID classification** (based on NACE Rev. 2), searchable but not confirmed to be bulk-downloadable for free.
  Source: (pplx synthesis, no single authoritative BULSTAT field-schema page located) — flagged as **not fully verified**; recommend confirming directly with Registry Agency before relying on this for filtering.

**Bulk download / open data / API:**
- No verified free, official bulk dataset or API from the Registry Agency itself.
- Third-party aggregator **CompanyBook** (https://companybook.bg/?lang=en) claims to ingest Registry Agency open-data publications and offers API/HTTP access, but full-dataset downloads require contacting the provider directly — treat as a commercial aggregator, not a primary source, and verify data currency/completeness before relying on it.
- A commercial data vendor (https://companydata.com/company-register/bulgaria/) cites a minimum prepaid amount of **approx. €51.13** for Registry Agency automated/paid access services — this figure is from a third-party vendor page, not an official Registry Agency tariff page, and should be confirmed directly with the Agency.
- Bulgaria's general open-data catalogue (data.egov.bg) may hold a BULSTAT-related dataset but no confirmed current free full-register extract with activity codes was located in this pass.

**Cost:** Manual individual lookups are free. Bulk/automated access is understood to be contract-based and paid, exact current tariff not confirmed from a primary Registry Agency tariff page in this research pass — **flag for direct follow-up with the Agency.**

**Fields confirmed present on a standard Commercial Register extract:**
- Legal name (incl. foreign-language transliteration) — yes
- Registration number (UIC/EIK) — yes
- Legal form (EOOD, OOD, AD, ET, etc.) — yes
- Activity/NACE code — **not confirmed on Commercial Register extract**; "business object" is free text. NACE/KID code appears to live in the separate BULSTAT record, not fully verified as bulk-queryable.
- Registered address — yes (registered seat)
- Employee count / size band — **not exposed**
- Turnover — **not exposed** on the register itself (annual financial statements may be filed and attached as documents, but turnover is not a structured searchable field)
- Website/domain — **not exposed**
- Contact email — **not exposed**
- Names of directors/officers — yes (managers, legal representatives, board members are listed, including representation rights)

Sources for field list: https://companydata.com/company-register/bulgaria/ ; https://portal.registryagency.bg/CR/en/services/208 ; https://e-justice.europa.eu/pdf-export/1277_en

---

## 3. Sectoral regulator registers (per Annex I / Annex II sector, excluding banking & FMI)

### Annex I.1 — Energy (electricity, district heating/cooling, oil, gas, hydrogen)
**Register:** KEVR (Energy and Water Regulatory Commission / ЕВРК-ДКЕВР) — public register of licensed electricity, natural gas, and district-heating operators.
**URL:** https://portal.dker.bg/registri/litsenzii (English regulator site: https://www.dker.bg/en/home)
**Public:** Yes. **Bulk download:** No official CSV/API found on the page as indexed; table may support on-page export controls, otherwise request a machine-readable extract from KEVR directly.
**Fields exposed:** operator name, company identifier, licence number, licensed activity, territory of licence, validity period.
Source: https://portal.dker.bg/registri/litsenzii

Hydrogen and oil: no dedicated public licensing register was identified distinct from the above in this research pass — **flag for follow-up.**

### Annex I.2 — Transport
**Air (carriers, airports, ground handling):** Civil Aviation Administration (CAA/ГВА).
- Air carriers with valid EU operating licence: https://www.caa.bg/en/category/288/3207 (public list)
- Registered airports/heliports: https://www.caa.bg/bg/category/622/17579 (public register, Bulgarian)
- Licensed airport/ground-handling/self-handling operators: https://www.caa.bg/bg/category/653/16965 (public; downloadable XLSX found at https://www.caa.bg/sites/default/files/upload/documents/2020-08/ground_handling_ops_site_caa.xlsx )
**Public:** Yes. **Bulk download:** Yes for ground-handling operators (XLSX file published); other lists are web-page tables.
**Fields:** operator/carrier name, licence type, scope of licence; exact field schema not itemised beyond name + licence status in sources reviewed.

**Rail:** Executive Agency "Railway Administration" (ИА "Железопътна администрация").
**URL:** https://www.iarail.eu/ — licensed railway undertakings expected under a Registers/Licences section; a direct register URL to the licence list itself was not isolated in this pass.
**Public:** Likely yes (not independently confirmed with a direct register page). **Bulk download:** not confirmed. **Flag: needs direct follow-up.**

**Water/Maritime:** Executive Agency "Maritime Administration" (ИА "Морска администрация").
- Port-operator register page: https://www.marad.bg/bg/taxonomy/term/179 (public)
- Downloadable national port-operator list (PDF): https://www.marad.bg/sites/default/files/upload/documents/2019-10/Lm_RegPortOper_01102019.pdf
- Regional (Varna) port-operator list (PDF): https://www.marad.bg/sites/default/files/upload/documents/2020-10/VN_Reg_port_oper_29092020_%D0%9F%D0%A2%D0%A4%D0%9A11022.pdf
**Public:** Yes. **Bulk download:** Yes, as static PDF lists (not structured CSV/API).
**Fields:** operator name; exact additional fields (address, licence number) not itemised in source summary — recommend opening the PDFs directly to confirm.

**Road:** Executive Agency "Automobile Administration" (ИА "Автомобилна администрация").
**URL:** https://rta.government.bg/ — "Registers → Public registers" section expected to hold registers for international/domestic road carriers; a direct register URL was not isolated in this pass. **Flag for direct follow-up.**

### Annex I.5 — Health
**Register:** Ministry of Health — register of hospitals and healthcare establishments (lechebni zavedeniya).
**URL:** https://www.mh.government.bg/bg/administrativni-uslugi/registri/lechebni-zavedeniya/ (overview of all public registers: https://www.mh.government.bg/bg/publichni-registri )
**Public:** Yes (Bulgarian-language, organised by region). **Bulk download:** not confirmed — appears to be a browsable web register, not a downloadable file.
**Fields:** establishment name, type (hospital, oncology centre, dialysis centre, tissue bank, etc.), region — exact schema not itemised in source summary; needs direct inspection.

**Supplementary:** NHIF (National Health Insurance Fund, https://www.nhif.bg/en) lists providers under contract with the Fund — a narrower list (only NHIF-contracted providers), accessible via NHIF's own search/contact channels or Regional Health Insurance Funds (RZOK).

### Annex I.6 — Drinking water
**Register:** Statutory operator register maintained by the **Ministry of Regional Development and Public Works (MRDPW/MRRB)** under the Water Act, via the Unified Information System for Water Supply and Sewerage (WSS) Services.
**URL:** https://www.mrrb.bg/en/water-supply-and-sewerage-and-public-works-directorate/ ; published operator list (PDF): https://www.mrrb.bg/static/media/ups/articles/attachments/241216_Spravka_rejim_ViKc8c45698934b0282ad3792a7b2fea6f4.pdf
**Public:** Yes — the Water Act requires the register to be publicly accessible online, including operator names, registered offices, management, service areas, consumers, and prices.
**Bulk download:** Published as static PDF list, not structured bulk data.
Legal basis (Water Act, specifies required register fields): https://www.minfin.bg/upload/39584/Water_Act.pdf

**Note:** KEVR also publishes a list of WSS ("ViK") operators with approved 2022–2026 business plans (https://www.dker.bg/uploads/2024/Spisak_ViKO_BP_2022_2026.pdf) but KEVR itself states this is **not** the statutory operator register — use the MRDPW list as primary.

### Annex I.7 — Waste water
No single clearly labelled national "wastewater treatment operators register" was identified. Oversight sits with the **Ministry of Environment and Water (MOEW)** and its four regional **Basin Directorates**, via discharge permits rather than a consolidated public operator list.
**URL (MOEW Water portal):** https://www.moew.government.bg/en/water/
**Public:** Partial — permit and announcement data published, but no single consolidated operator register found. **Flag for follow-up with Basin Directorates individually.**
In practice, the same WSS operators under I.6 (MRDPW register) typically also run wastewater treatment, so the drinking-water register above is the practical proxy.

### Annex I.8 — Digital infrastructure
**IXP:** No dedicated public Bulgarian IXP operator register found in this pass — **none found.**

**DNS/TLD:** Register.BG is the delegated registry operator for the **.bg** ccTLD.
**URL:** http://www.register.bg (IANA delegation record: https://www.iana.org/domains/root/db/bg.html)
**Public:** The registry itself is identifiable publicly; a structured public register of all .bg registrants is not the same as WHOIS lookups (whois.register.bg exists for individual domain lookups, not bulk).
**Bulk download:** Not available for registrant data (standard WHOIS privacy practice).

**Trust services (qualified):** Communications Regulation Commission (CRC) is Bulgaria's eIDAS supervisory body.
**URL (Bulgarian Trusted List PDF):** https://www.crc.bg/files/_en/TSL_BG.pdf ; CRC trust-services page: https://crc.bg/bg/rubriki/560/elektronni-udostoveritelni-uslugi
**Public:** Yes — the EU Trusted List (TSL) format is a standard public document.
**Fields:** qualified trust service provider name, qualified service type, status — standard eIDAS TSL schema.

**Cloud / data centre / CDN providers:** **None found.** No public Bulgarian register of cloud, data-centre, or CDN providers exists — these fall under the confidential NIS2 register (Section 1) and the Ministry of Transport, Information Technologies and Communications is the competent authority, but it does not publish a provider list.
Source: https://kvlaw.bg/en/news/nis2-in-bulgaria-new-cybersecurity-obligations-businesses-should-assess-in-time/ ; https://digital-strategy.ec.europa.eu/en/policies/nis2-directive-bulgaria

**Electronic communications networks/services:** CRC public register of providers of public electronic communications networks and services.
**URL:** https://crc.bg/ords/f?p=723:12:30286394632914 (notification process described at https://crc.bg/en/articles/2203/notification-of-public-electronic-communications-networks-and-services )
**Public:** Yes. **Bulk download:** Not a static file — Oracle APEX web app; use on-page export/filter controls, no documented API.
**Fields:** provider name and notification status at minimum; full schema requires direct inspection of the APEX app.

### Annex I.9 — ICT service management B2B (MSP / MSSP)
**None found.** No public Bulgarian register of managed service providers or managed security service providers exists. These entities fall under the confidential central NIS2 register only.
Source: https://kvlaw.bg/en/news/nis2-in-bulgaria-new-cybersecurity-obligations-businesses-should-assess-in-time/

### Annex I.10 — Public administration
**Register:** Administrative Register (Административен регистър), under the Administration Act.
**URL:** https://iisda.government.bg/ras/ (sub-pages: https://iisda.government.bg/ras/adm_structures , https://iisda.government.bg/ras/adm_structures/special_terr_administrations )
**Public:** Yes. **Bulk download:** not confirmed, appears browsable rather than exportable.
**Fields:** administrative structure name, type (ministry, state agency, executive agency, regional/municipal administration), responsible officials, address, working hours.
Source: https://www.mi.government.bg/file/2022/03/file-382-1-6585.pdf ; https://ec.europa.eu/social/BlobServlet?docId=19942&langId=en (confirms 28 regional administrations, 265 municipalities)

### Annex I.11 — Space
**None found** as a consolidated licensing/company register. Space policy is coordinated by the ministry responsible for innovation (midt.gov.bg) in cooperation with ESA/EUSPA; the **Space Research and Technology Institute (SRTI-BAS)**, part of the Bulgarian Academy of Sciences, is the principal technical institution but not a company register.
Sources: https://midt.gov.bg/en/innovations ; https://www.euspa.europa.eu/countries/bulgaria ; https://spacesecurityportal.org/states/bulgaria

### Annex II.1 — Postal and courier
**Register:** CRC public register of postal operators (universal and non-universal services).
**URL:** https://crc.bg/bg/rubriki/226/regulirane-na-poshtenskite-uslugi
**Public:** Yes, required by the Postal Services Act. **Bulk download:** not confirmed — appears to be a web page/register rather than downloadable file.
Legal basis: https://www.mtc.government.bg/archive/en/upload/docs/2016-08/Postal_Services_Act_en_25_07_2014.pdf

### Annex II.2 — Waste management
**Register:** Executive Environment Agency (EEA/ИАОС) — National Waste Information System, public registers of waste-activity permits (Art. 67 Waste Management Act), registration documents (Art. 78), and waste traders/brokers.
**URL:** https://nwms.eea.government.bg/app/registers (Bulgarian index: https://eea.government.bg/publichni-registri ; English MOEW portal: https://www.moew.government.bg/en/waste/registers/ )
**Public:** Yes. **Bulk download:** not confirmed as CSV/API — browsable register application.
**Fields:** permit holder name, permit type/article reference, waste codes handled — exact schema needs direct inspection of the register application.

### Annex II.3 — Chemicals
**None found** as a Bulgarian national register. REACH registrant information sits with **ECHA** (EU-level), not a Bulgarian national list.
**URL (ECHA database):** https://echa.europa.eu/information-on-chemicals
Competent authority in-country: Ministry of Environment and Water / Executive Environment Agency, but no public company-level REACH register was identified at national level.
Source: https://www.moew.government.bg/en/environmental-protection-act-7628/

### Annex II.4 — Food (wholesale and industrial only)
**Register:** Bulgarian Food Safety Agency (BFSA/БАБХ) — National Register of Food Production and Distribution Sites.
**URL:** https://bfsa.egov.bg/wps/portal/bfsa-web/registers/feed.control.and.control.of.ABP.and.derived.products (general registers index: https://bfsa.egov.bg/wps/portal/bfsa-web/registers ; separate extended public register interface: https://public-iisr.bfsa.bg/BABHRegsExt/pagesPublic/registers/register44.xhtml?locale=bg )
**Public:** Yes (Bulgarian-language). **Bulk download:** not confirmed.
**Fields:** establishment name, activity type (production/storage/distribution/wholesale), registration/approval number — exact schema requires direct inspection; not itemised in source summary.

### Annex II.5 — Manufacturing (medical devices, NACE C26–C30)
**Medical devices specifically:** Bulgarian Drug Agency (BDA/ИАЛ) — Medical Devices Register.
**URL:** https://meddev.bda.bg/en/md_list/?search=1 (registers index: https://www.bda.bg/en/registers ; company-info section: https://www.bda.bg/en/registers/114-information-for-companies-section/medical-devices-category )
**Public:** Yes. **Bulk download:** not confirmed as an export file — searchable web database.
**Fields confirmed:** manufacturer name, device, and Bulgarian distributor/importer name (per example record cited).
Source: https://meddev.bda.bg/en/md_list/?search=1&sManufacturerName=Vogt+Medical+Vertrieb+GmbH

**General manufacturing NACE C26–C30 (electronics, electrical equipment, machinery, motor vehicles, other transport equipment):** No dedicated sectoral licensing register exists for general manufacturing — these entities are identified via the Commercial Register/BULSTAT NACE/KID code field (Section 2), not a sectoral regulator. **None found** beyond the general business register.

### Annex II.6 — Digital providers
Covered under Annex I.8 digital infrastructure findings above (no public register for cloud/CDN/MSP-type digital providers; DNS/TLD and trust services registers are public as noted).

### Annex II.7 — Research
**Register:** National Center for Information and Documentation (NACID), under the Ministry of Education and Science — public electronic register of research organisations, universities, researchers, research infrastructures, publicly financed programmes/projects, and outputs.
**URL:** Referenced via https://european-research-area.ec.europa.eu/document-download/518 and the enabling law at https://european-research-area.ec.europa.eu/sites/default/files/documents/2024-05/Bulgaria_LAW%20to%20promote%20research%20and%20innovation.pdf — a direct NACID public register URL was not isolated in this pass; **flag for direct follow-up** (likely at nacid.bg).
**Public:** Yes, per statutory requirement. **Bulk download:** not confirmed.

---

## 4. Field-availability summary matrix

| Field | Commercial Register (Registry Agency) | BULSTAT | Sectoral regulator registers (typical) |
|---|---|---|---|
| Legal name | Yes | Yes | Yes |
| Registration number | Yes (UIC/EIK) | Yes (BULSTAT no.) | Varies — licence/permit number, not always EIK |
| Legal form | Yes | Not confirmed | Rarely shown |
| Activity/NACE code | Not confirmed (free-text "object" only) | Yes (KID/NACE field), bulk access not confirmed | N/A — regulator registers identify by licensed activity type, not NACE |
| Registered address | Yes | Likely yes, not confirmed | Sometimes (e.g., KEVR shows territory, not always street address) |
| Employee count/size band | No | No | No — not observed in any register reviewed |
| Turnover | No (only via filed financial statements as documents) | No | No |
| Website/domain | No | No | No (except Register.BG for the domain itself, not company website) |
| Contact email | No | No | No |
| Directors/officers names | Yes (managers, legal reps, board members) | Not confirmed | Occasionally (e.g., representative named in licence) |

**Bottom line for outbound targeting:** No single Bulgarian register combines NACE/activity code with contact details (email, website) or firmographic data (employee count, turnover) in one public, bulk-accessible pull. The Commercial Register/BULSTAT combination gives name + legal form + registered officers + address, and (unverified) a KID/NACE code via BULSTAT, but no contact data and no confirmed bulk export. Sectoral registers add licence-based confirmation of in-scope status per sector but almost never contact or firmographic data. A workable approach is: (1) use sectoral regulator lists to identify named entities, (2) cross-reference EIK via Commercial Register/BULSTAT for legal form, officers, and address, (3) separately source contact/firmographic/website data from third-party commercial databases (e.g., CompanyBook, companydata.com) since none of the primary government registers expose it — note these commercial sources are unverified aggregators and should be spot-checked.

---

## 5. NIS2 transposition status

**In force:** Yes, as of **17 February 2026**. Amendments to Bulgaria's **Cybersecurity Act** were promulgated 13 February 2026 and entered into force 17 February 2026 — roughly 16 months after the EU's 17 October 2024 transposition deadline.
Sources: https://cms.law/en/bgr/legal-updates/bulgaria-adopts-nis2-aligned-cybersecurity-law ; https://www.nis-2-directive.com/Transposition/Bulgaria.html ; https://chambers.com/articles/bulgaria-s-long-road-to-nis2-is-over

**Registration duty:** Yes. Essential and important entities must provide registration information to the competent authority **within three months** of becoming subject to the Act (identity, address, sector, size, and relevant technical details).
Source: https://www.innovires.com/en/blog/nis2-bulgaria-kibersigurnost.html

**Identification methodology:** The Council of Ministers must adopt a formal identification methodology within six months of the Act's entry into force (i.e., by roughly August 2026); sectoral competent authorities then identify/designate entities and notify the Minister of e-Government for register entry.
Source: https://chambers.com/articles/bulgaria-s-long-road-to-nis2-is-over

**Article 20(2) management-body training duty — separately enforceable/fineable: YES.**
- Management-body members must personally complete cybersecurity training **at least every two years** and arrange equivalent training for employees regularly.
- **Personal fine for a management-body member who breaches this duty: EUR 500–5,000**, distinct from and in addition to entity-level fines.
Source: https://www.schoenherr.eu/content/bulgaria-nis2-directive-and-the-bulgarian-cybersecurity-act-personal-liability-for-managers-and-board-members

**Entity-level maximum fines:**
- Essential entities: up to **EUR 10 million or 2% of worldwide annual turnover**, whichever is higher.
- Important entities: up to **EUR 7 million or 1.4%** of worldwide annual turnover, whichever is higher.
Source: https://cms.law/en/bgr/legal-updates/bulgaria-adopts-nis2-aligned-cybersecurity-law

**Transitional rule:** Fines for infringements committed before **1 June 2026** are subject to a 50% statutory reduction; full fine amounts apply from that date onward.
Source: https://www.schoenherr.eu/content/bulgaria-nis2-directive-and-the-bulgarian-cybersecurity-act-personal-liability-for-managers-and-board-members

---

## Flags / items requiring direct follow-up (not fully resolved by this research pass)

1. BULSTAT NACE/KID field bulk-queryability — not confirmed with a primary Registry Agency source; recommend contacting the Agency directly.
2. Registry Agency paid bulk-access tariff — figure (~€51.13) sourced from a third-party commercial vendor page (companydata.com), not an official Agency tariff sheet.
3. Rail (Railway Administration) and road (Automobile Administration) direct register URLs for licensed carriers — agency homepages identified, but the specific register page was not isolated.
4. Wastewater-treatment-specific operator register — no single consolidated public list found; likely requires querying each of the 4 Basin Directorates individually.
5. IXP operator register, chemicals/REACH national register, and space-sector company register — none found at all; likely do not exist as distinct public Bulgarian registers for these categories.
6. NACID public research register direct URL — enabling law and EU documentation located, but the live register page itself (likely at nacid.bg) was not directly verified.
7. Several sectoral registers (Health, Waste, Food, Postal) are described as "public" web-browsable registers, but bulk-download/export capability was not confirmed either way — treat as "browse only" until verified.
