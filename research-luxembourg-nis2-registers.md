# Luxembourg — Public Registers for NIS2 In-Scope Entity Enumeration

Research date: 2026-10-13. Prepared for NexGenio outbound target-list build.
Banking (Annex I §3) and Financial Market Infrastructures (Annex I §4) excluded per scope instructions.

All claims are sourced inline. Where Perplexity could not locate an official source, this is stated explicitly — nothing below is filled from unverified prior knowledge unless flagged "UNVERIFIED."

---

## 1. Competent-authority register of essential/important entities

**Authority:** Institut Luxembourgeois de Régulation (ILR) is the principal NIS2 competent authority for Luxembourg (not ANSSI/HCPN, which handles national cyber-crisis coordination, and not CSSF, which retains sectoral competence for banking/FMI — both out of scope here).
Source: https://www.ilr.lu/en/sectors/niss/nis-2/ ; https://www.ilr.lu/en/sectors/niss/nis-2/frequently-asked-questions-about-nis2-faq/ ; HCPN circular confirming ILR's role: https://hcpn.gouvernement.lu/dam-assets/fr/anssi/documents/documentation-hcpn-anssi-luxembourg/circulaire-nis2.pdf

**Mechanism:** Self-registration. In-scope entities (essential, important, and domain-name registration service providers) must self-register with ILR via an online form/portal.
Source: https://www.ilr.lu/en/sectors/niss/self-registration/

**Public or confidential:** **Confidential — not a public list.** The ILR material confirms the self-registration form is used by ILR to build and maintain the internal list of essential/important entities for supervisory purposes. Nothing in the published ILR guidance indicates the underlying register (names, contacts, turnover, employee counts, security-contact details, site locations) is published or searchable by third parties. No public search interface for the ILR entity list was found.
Source: https://www.ilr.lu/en/sectors/niss/nis-2/frequently-asked-questions-about-nis2-faq/

**Fields collected on registration (per ILR FAQ/self-registration guidance), for context only — not fields NexGenio can pull, since the register is not public:**
legal name and RCS identification; activity/sector and NACE-type classification; EU member states of establishment; employee numbers and turnover/balance-sheet size; critical services provided and Luxembourg operating locations; 24/7 cybersecurity point-of-contact details; EU representative details (if non-EU entity).
Source: https://www.ilr.lu/en/sectors/niss/nis-2/scope-and-field-of-application/ ; https://www.ilr.lu/en/sectors/niss/self-registration/ ; https://www.ilr.lu/en/sectors/niss/nis-2/frequently-asked-questions-about-nis2-faq/

**Conclusion for outbound targeting:** The ILR register cannot be used directly to enumerate named entities. It can only be used indirectly — via ILR's sector-specific licensing/authorisation lists that ARE public (see §3 below), which is the closest proxy for "in-scope entity" lists in several Annex I sectors.

---

## 2. National business register — RCS / Luxembourg Business Registers (LBR)

**Name:** Registre de Commerce et des Sociétés (RCS), operated by Luxembourg Business Registers (LBR), a public GIE.
**URL:** https://www.lbr.lu — search front-end: https://www.lbr.lu/mjrcs-web-front/search-decision ; consult/search list: https://www.lbr.lu/mjrcs-web-front/consult-search-list
Background/guide: https://www.lbr.lu/mjrcs/jsp/webapp/static/mjrcs/en/mjrcs/pdf/guide_utilisateur_rcs.pdf ; FAQ: https://lbr.lu/mjrcs/jsp/webapp/static/mjrcs/en/mjrcs-lbr/pdf/faq.pdf
e-Justice overview: https://e-justice.europa.eu/topics/registers-business-insolvency-land/business-registers-eu-countries/lu_en

**Search method:** By company **name or RCS registration number (B-number)** only. **No dedicated NACE/activity-code search filter** exists on the LBR public search front-end.
Source: https://e-justice.europa.eu/topics/registers-business-insolvency-land/business-registers-eu-countries/lu_en ; https://www.lbr.lu/mjrcs-web-front/search-decision

**Is NACE code exposed?** Yes, as a displayed data field once you open a specific company record (along with VAT number and business permit info) — but it is not a search criterion for bulk discovery.
Source: https://e-justice.europa.eu/topics/registers-business-insolvency-land/business-registers-eu-countries/lu_en ; https://guichet.public.lu/en/entreprises/gestion-juridique-comptabilite/registre-commerce/depots-publications/immatriculation-entreprise-publication-rcs.html

**Bulk download / open data / API:** No official bulk-export, open-data feed, or public REST API for the full RCS dataset was identified in LBR's own published material. Treat any third-party "Luxembourg company database" (e.g., companydata.com, lemreveal.com) as a commercial re-seller, not an LBR open-data product.
Source: https://www.lbr.lu/mjrcs-web-front/search-decision ; https://lbr.lu/mjrcs/jsp/webapp/static/mjrcs/en/mjrcs-lbr/pdf/faq.pdf

**Cost:** Basic lookup and viewing filed documents is **free**. Certified extracts/certificates are fee-based (fee schedule in the FAQ/guide PDFs above, not separately itemised by Perplexity).
Source: https://guichet.public.lu/en/entreprises/gestion-juridique-comptabilite/registre-commerce/depots-publications/immatriculation-entreprise-publication-rcs.html

**Exact fields exposed per company record:**
| Field | In RCS/LBR record? |
|---|---|
| Legal name / trade name | Yes |
| Registration number (RCS B-number) | Yes |
| Legal form | Yes |
| Activity/NACE code | Yes (on record page; not a search filter) |
| Registered address | Yes (registered office only, not operating sites) |
| Employee count | **No** — not a standard field; may appear in filed annual accounts for larger entities, not guaranteed |
| Turnover | **No** — not a standard field; may appear in filed annual accounts, subject to size-based filing exemptions |
| Website/domain | Not identified as a standard field |
| Contact email | Not identified as a standard field |
| Directors/officers/managers | Yes — managers, authorised signatories, and (where applicable) auditors/supervisory persons are filed and shown, terminology varies by legal form |

Source for the field table: https://guichet.public.lu/en/entreprises/gestion-juridique-comptabilite/registre-commerce/depots-publications/immatriculation-entreprise-publication-rcs.html ; https://lbr.lu/mjrcs/jsp/webapp/static/mjrcs/en/mjrcs-lbr/pdf/faq.pdf

**Complementary NACE-searchable source (important workaround for bulk NACE enumeration, since LBR itself has no NACE filter):**
**STATEC "Répertoire des entreprises"** and the associated **Business Registry Explorer** (data.public.lu) allow searching Luxembourg businesses **by activity (NACE), name, or city**. The underlying directory dataset (company name, address, assigned NACE code) is distributed as an Excel file **on request** to STATEC (`unite.repertoire@statec.etat.lu`) for statistical-use purposes — not published as an unrestricted open download. Structural/aggregate statistics by NACE are downloadable; the company-level file is request-gated.
Sources: https://data.public.lu/fr/datasets/entreprises/ ; https://data.public.lu/en/datasets/entreprises-demographie-et-structure-des-entreprises-statistiques-structurelles-sur-les-entreprises/ ; https://data.public.lu/en/reuses/business-registry-explorer/ ; https://statistiques.public.lu/dam-assets/catalogue-publications/repertoire/2020/repertoire-entreprises-20.pdf ; contact page: https://guichet.public.lu/fr/citoyens/organismes/organismes_entreprises/statec.html

---

## 3. Sectoral regulator registers, by NIS2 sector (Banking and FMI excluded)

### Annex I

**1. Energy**
- *Electricity suppliers:* ILR publishes a **public list of authorised electricity suppliers** (15 authorised, 12 active as of the cited report). Public: yes. Bulk download: no (web list/report, not a dataset). URL: https://www.ilr.lu/secteurs-activites/energie/electricite/fourniture-gestionnaires-reseau/fourniture/fournisseurs/
- *Natural gas suppliers/network operators:* ILR Energy section publishes gas-market data and operator information. Public: yes (web pages/publications). Bulk download: no. URL: https://www.ilr.lu/secteurs-activites/energie/
- *Electricity generation installations:* **RNCP** (national register of generation plants) is published via Luxembourg's open-data portal, ILR-managed platform. Public: yes. Bulk download: appears to be a dataset — check https://data.public.lu/fr/organizations/institut-luxembourgeois-de-regulation-ilr/datasets.csv
- *District heating/cooling:* **None found.** No ILR licensing register identified for district heating; likely regulated via municipal/environmental/concession channels rather than a central public register.
Sources: https://www.ilr.lu/secteurs-activites/energie/ ; https://data.public.lu/en/organizations/institut-luxembourgeois-de-regulation-ilr/

**2. Transport**
- *Air:* **Direction de l'Aviation Civile (DAC)** is competent authority. DAC publishes the **Luxembourg aircraft registration list** (public register of registered aircraft) — public: yes, URL: https://dac.gouvernement.lu/en/demarches/immatriculation-aeronefs/releve-immatriculations.html. **No consolidated public list of licensed airlines (AOC/operating-licence holders) or licensed airports/aerodromes was found**; DAC licensing contact is lic@av.etat.lu. Main portal: https://dac.gouvernement.lu/en.html
- *Rail:* **None found.** CFL is the national operator/infrastructure manager, not the regulator; no current public register of licensed railway undertakings (licences/safety certificates) was identified for Luxembourg in the sources checked.
- *Road:* **TRERR** — public register of road-transport companies/carriers and their authorisations. Public: yes. URL: https://transports.public.lu/en/transporter/trerr.html. Public-transport/bus operators under RGTR contracts are listed via the Administration des transports publics (ATP), though as a service directory rather than a licensing register: https://atp.gouvernement.lu/en/rgtr.html
- *Water (inland waterway):* Luxembourg maintains a river/vessel registry for Luxembourg-flagged vessels; the sources found describe the registration framework but **no publicly searchable vessel-by-vessel or operator-by-operator list** was identified. Passenger-vessel commercial operation requires a Ministerial licence (not itself a published register). URL for framework: https://transports.public.lu/en/transporter/transports-fluviaux/bateau-passagers.html
Sources as cited inline above.

**5. Health**
- No single licensing register of healthcare providers was found; closest official sources: **ObSanté "Carte sanitaire"** (National Health Observatory) — hospital establishments, sites, services, capacity, published via Luxembourg Open Data (2025 edition). Public: yes. URL: https://data.public.lu/en/ (dataset title "Carte sanitaire"). The **Luxembourg Hospital Federation (FHL)** website is the government's own pointer for "the list of hospitals," i.e., an industry-association list, not a regulator-maintained licence register.
Source: https://luxembourg.public.lu/en/living/health-and-social-security/health-services-practical-information.html

**6. Drinking water**
- No single ILR-style licence register; **Open Data dataset "Syndicats d'eau potable"** lists intermunicipal drinking-water syndicates and member municipalities (SES, SEBES, SIDERE, plus municipal water departments). Public: yes. Bulk download: yes (dataset). URL: https://data.public.lu/en/datasets/syndicats-deau-potable/
Supplementary cross-reference list of operators via SES's own "useful links" page: https://www.ses-eau.lu/online/www/navMain/25/DEU/index.html

**7. Waste water**
- **Administration de la gestion de l'eau (AGE)** publishes open data on wastewater-treatment plants (raw operational data, not a licensing register per se). Public: yes, bulk download: yes. URL: https://data.public.lu/en/datasets/raw-data-of-wastewater-from-treatment-plants-in-luxembourg/
Named intermunicipal operators (SIDERO, SIDEN, SIA, etc.) identified via SES cross-reference page above, not a dedicated AGE operator directory.

**8. Digital infrastructure**
- *Electronic communications networks/services:* ILR maintains a **public register of notified undertakings** ("Registre public (Autorisation)") under the general-authorisation notification regime. Public: yes. Bulk download: not confirmed (web register, not confirmed as downloadable dataset). URL: https://www.ilr.lu/secteurs-activites/communications-electroniques/ ; notification procedure: https://www.ilr.lu/secteurs-activites/communications-electroniques/devenir-operateur/notification-et-autorisation/
- *IXP:* **LU-CIX** publishes a **public members list** (connected + supporting members) — this is an exchange-membership list, not a regulator licence register, and membership does not confirm NIS2 in-scope status. Public: yes. URL: https://www.lu-cix.lu/members/
- *DNS/TLD registries:* No dedicated public ILR directory of DNS service providers/TLD registries was identified (distinct from the general electronic-communications register). **None found** as a standalone public list.
- *Cloud / data centre / CDN:* No official consolidated public register. **LuxConnect** (state-owned) publishes its own facility list (self-disclosure, not a regulator register): https://www.luxconnect.lu/infrastructure/. Commercial directories (datacentermap.com) exist but are third-party, not official. **None found** as an official regulator register for cloud/data centre/CDN operators specifically.
- *Trust services:* The **EU Trusted List for Luxembourg**, supervised by ILR under eIDAS, is the authoritative public register of qualified trust-service providers and their qualified services (signatures, seals, timestamps, validation/preservation, e-delivery, website-authentication certs). Public: yes.
Source for ILR's role: https://www.ilr.lu/en/sectors/niss/nis-2/frequently-asked-questions-about-nis2-faq/ ; general ILR open-data profile: https://data.public.lu/en/organizations/institut-luxembourgeois-de-regulation-ilr/ (exact EU Trusted List LU-specific URL not independently re-verified in this run — treat as the standard eIDAS Trusted List mechanism referenced by ILR).

**9. ICT service management (B2B — MSPs/MSSPs)**
- **None found.** No sectoral licensing register for managed service/managed security service providers was identified; these entities are only discoverable via RCS/STATEC NACE classification (likely NACE J62/J63) and are subject to NIS2 self-registration with ILR, which is confidential (see §1).

**10. Public administration**
- Not a "licensed operator" sector; enumerable via the Guichet.lu government-bodies directories:
https://guichet.public.lu/en/entreprises/organismes/organismes_entreprises.html and https://guichet.public.lu/en/citoyens/organismes/organismes_citoyens.html — public directories of government administrations/bodies, free, not structured as NACE/turnover-style records.

**11. Space**
- **Luxembourg Space Agency (LSA)** maintains two official authorisation registers: (a) register of authorisations under the Law of 15 December 2020 on Space Activities; (b) register of authorisations under the Law of 20 July 2017 on Exploration and Use of Space Resources; plus (c) the National Registry of Space Objects. Public: yes (legal-framework/industry-portal page). Bulk download: not confirmed as a downloadable dataset.
URL: https://space-agency.public.lu/en/support/industry-portal/legal-framework.html
Caution: the LSA's "Space Directory" (PDF, e.g. https://space-agency.public.lu/dam-assets/old-website/publications/2025/space-directory-2025-screen.pdf) is an **industry directory, not proof of licensing** — do not treat listed companies as automatically authorised.

### Annex II

**1. Postal and courier**
- ILR regulates postal services but **no dedicated public operator register/list was identified** distinct from the general ILR postal-sector pages (https://data.public.lu/en/organizations/institut-luxembourgeois-de-regulation-ilr/). Treat as **none found** for a discrete public licence list; MyILR (https://www.myilr.lu/en/) may hold relevant filings but public-search capability was not confirmed.

**2. Waste management**
- **Administration de l'environnement (AEV)** requires authorisation/registration for waste collectors, transporters, traders, brokers, and treatment facilities. AEV's open-data portal publishes data on waste-treatment/collection facilities; individual permits/registrations are handled via the Environment Portal / Guichet.lu, and a consolidated public searchable register of all authorised operators was **not confirmed** as existing — open-data facility datasets exist but completeness as an NIS2-scoping tool is unverified.
Sources: https://guichet.public.lu/en/entreprises/urbanisme-environnement/dechets-subst-dangereuses/transport-dechets/enregistrement-transport-dechets.html ; https://data.public.lu/en/organizations/administration-de-lenvironnement/

**3. Chemicals**
- **None found** as a Luxembourg-specific public register of "authorised chemical operators." REACH compliance in Luxembourg is supported by the national REACH&CLP Helpdesk (https://www.reach.lu/en/), but operator/substance-level registers are maintained at EU level by **ECHA**, not nationally in Luxembourg.

**4. Food (wholesale and industrial only)**
- **Administration luxembourgeoise vétérinaire et alimentaire (ALVA)** requires notification/registration of food production, processing, wholesale/distribution, feed, and food-contact-material businesses via MyGuichet.lu. The individual operator register is **not presented as an open public directory** — registration is mandatory but no public search interface was identified.
Source: https://guichet.public.lu/en/entreprises/sectoriel/services-accueil/obligations-accueil/enregistrement.html

**5. Manufacturing (medical devices; NACE C26–C30)**
- *Medical devices:* Luxembourg-established manufacturers (and EU representatives) placing devices on the market register with the **Health Directorate** (meddevices@ms.etat.lu); higher-risk devices and other economic operators register via **EUDAMED** (EU-level, not a standalone public Luxembourg list). Not confirmed as a public-searchable Luxembourg list — registration is to the authority, not published.
Source: https://guichet.public.lu/en/entreprises/import-export/intra-ue/produits-eee/dispositifs-medicaux.html
- *NACE C26–C30 generally:* **None found** as a dedicated public register; use RCS (company-level, no NACE filter) or STATEC's répertoire/Business Registry Explorer (NACE-searchable, company-level file request-gated) — see §2.

**6. Digital providers (marketplaces, search engines, social networks, cloud, etc. under Annex II)**
- **None found** as a consolidated official ILR register specifically for these categories. ILR is confirmed as the relevant regulator generally, but no dedicated public list of in-scope marketplaces/cloud providers was identified beyond the confidential NIS2 self-registration (§1) and the general electronic-communications register (§3, Digital infrastructure, above) where applicable.

**7. Research**
- No licensing register (not a licensed activity); enumerable via known named public research institutions: University of Luxembourg, LIST, LIH, LISER, LNS, FNR — listed/cross-referenced at "Research Luxembourg": https://www.researchluxembourg.org/en/research-landscape/research-institutions/other-institutions/ and via Guichet.lu bodies directory: https://guichet.public.lu/en/entreprises/organismes/organismes_entreprises.html. This is a small, enumerable, named list (not a searchable database with fields) — fewer than ~10 major public entities.

---

## 4. Field-availability summary matrix

| Field | ILR NIS2 register (§1) | RCS/LBR (§2) | STATEC répertoire (§2) | Sectoral registers (§3) |
|---|---|---|---|---|
| Legal name | Collected, not published | Yes | Yes | Varies — generally yes where a named list exists (e.g. DAC aircraft list, ILR electricity suppliers, LSA authorisations) |
| Registration number | Collected, not published | Yes (RCS B-number) | Not confirmed | Not generally |
| Legal form | Collected, not published | Yes | Not confirmed | Not generally |
| Activity/NACE code | Collected, not published | Yes (display only, not searchable) | Yes (searchable + in company-level file) | N/A — sector is implicit in the register itself |
| Registered address | Collected, not published | Yes (registered office only) | Yes | Varies (e.g. aircraft register, data-centre self-disclosure) |
| Employee count/size band | Collected, not published | No (not standard; maybe in filed accounts) | No | Not identified in any sectoral register found |
| Turnover | Collected, not published | No (maybe in filed accounts, size-exempt) | No | Not identified |
| Website/domain | Not confirmed | No | No | Not identified (exception: LU-CIX members may list networks/ASNs, not domains) |
| Contact email | Collected (security contact), not published | No | No | DAC publishes a generic licensing-department email, not per-entity contacts |
| Directors/officers | Not confirmed | Yes (managers/authorised signatories/auditors, varies by legal form) | No | Not identified |

---

## 5. NIS2 transposition status

- **Law:** Luxembourg's NIS2 Act is the **Law of 5 May 2026** "on measures intended to ensure a high level of cybersecurity," entered into force **10 May 2026**, repealing the prior NIS1-era framework.
Sources: https://www.deloitte.com/lu/en/Industries/technology/perspectives/nis2-transposed-into-luxembourgish-law.html ; https://www.simmons-simmons.de/en/publications/cmqhtf6pm00dov6occ2svi2uz/luxembourg-transposes-nis2-strengthening-cybersecurity-rules- ; https://www.ilr.lu/en/cadre-legal/loi-nis2/
  - **Note on delay:** Luxembourg had not transposed NIS2 by the EU deadline; draft law no. 8364 was filed 13 March 2024, and the European Commission issued a **reasoned opinion against Luxembourg on 7 May 2025** for failure to notify full transposition. Source: https://digital-strategy.ec.europa.eu/en/policies/nis2-directive-luxembourg ; https://digital-strategy.ec.europa.eu/en/policies/nis-transposition

- **Registration duty:** Yes — in-scope entities (essential, important, and domain-name registration service providers) **must self-register with ILR**. Deadline was **10 July 2026** (two months after the law's entry into force). Entities must also report changes to previously submitted information within **two weeks**.
Sources: https://www.ilr.lu/en/sectors/niss/nis-2/frequently-asked-questions-about-nis2-faq/ ; https://www.ilr.lu/en/sectors/niss/nis-2/ ; https://nisd2.eu/en/wiki/timelines-and-status/nis2-timeline

- **Article 20(2) management-body training duty:** Transposed as **Article 13** of the Luxembourg NIS2 Act. It is a **statutory, enforceable obligation** (not mere guidance) — management bodies must undertake regular cybersecurity training and must approve/supervise cybersecurity risk-management measures.
  - **No separate standalone fine specifically for "failure to train" was identified.** Enforcement runs through the Act's general supervisory/sanctions regime:
    - Periodic penalty payments to compel remediation: up to **€1,250/day, capped at €25,000**.
    - For serious breaches by essential entities: possible **temporary prohibition on exercising management functions**.
    - General maximum administrative fines for substantive cybersecurity-risk-management/incident-reporting breaches: **essential entities** — higher of **€10 million or 2% of worldwide annual turnover**; **important entities** — higher of **€7 million or 1.4% of worldwide annual turnover**.
  - Caveat: the training duty is enforceable as part of the management body's broader statutory responsibility, but Perplexity's sources do not show it being fined as an isolated line item separate from the general cybersecurity-risk-management obligation.
Sources: https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2026/07-juillet/06-cybersecurite-nis-2.html ; https://maint.gouvernement.lu/dam-assets/circulaires/2026/2026-078.pdf ; https://www.pwc.lu/en/advisory/digital-tech-impact/cyber-security/directive-nis-2.html ; https://www.ilr.lu/en/sectors/niss/nis-2/

---

## 6. Flags — paywalled / account-gated / low-quality sources encountered

- **STATEC répertoire des entreprises** company-level Excel file: **request-gated** (email unite.repertoire@statec.etat.lu), not an open download. Aggregate NACE statistics are open.
- **LBR/RCS certified extracts/certificates:** fee-based. Basic lookup is free.
- **nisd2.eu, directive-nis2.eu, luxgap.com, nis-solutions.eu:** these are third-party compliance-vendor sites, not primary sources — used here only for corroborating dates/timelines; treat as secondary/marketing content, not authoritative. Primary sources (ILR, gouvernement.lu, EC digital-strategy pages) were prioritised wherever available.
- **companydata.com, lemreveal.com, datacentermap.com:** commercial data re-sellers/directories, not official registers — flagged as such above, do not treat as authoritative for legal/NIS2-scoping purposes.
- No LBR/RCS bulk API or open-data export could be confirmed as existing; absence of evidence is not proof of absence, but none was found in LBR's own published FAQ/guide documents.

---

## Bottom line for NexGenio outbound targeting in Luxembourg

1. The **ILR NIS2 entity list itself is confidential** — it cannot be scraped or requested as a target list.
2. **RCS/LBR** gives free legal-name/legal-form/address/director lookups but has **no NACE search filter**, so it is good for verifying a known target, poor for sector-wide discovery.
3. **STATEC's Business Registry Explorer** is the only identified NACE-searchable Luxembourg business tool; the full company-level file requires a direct request to STATEC.
4. The most actionable **public named-entity lists for Annex I sectors** are: ILR's electricity-supplier list, ILR's electronic-communications notified-undertakings register, DAC's aircraft registration list, TRERR's road-carrier register, and LSA's space-authorisation registers. Health, water/wastewater, and digital-infrastructure (cloud/data centre/DNS) sectors have **no comparable official named-operator register** — only open datasets of facilities (ObSanté, AGE, drinking-water syndicates) or self-published lists (LuxConnect, LU-CIX membership).
5. For Annex II, only **waste management (AEV)** and **food (ALVA)** have statutory registration obligations, but neither publishes a public searchable operator list; chemicals, digital providers, and manufacturing (beyond medical devices) have **no sector-specific public register at all** — fall back to RCS + STATEC NACE filtering.
