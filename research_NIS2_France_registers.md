# France — Public Registers for Enumerating NIS2 In-Scope Entities

Research date: 2026-10-13. Prepared for NexGenio LTD outbound target-list build.
Scope: Annex I sectors 1, 2, 5, 6, 7, 8, 9, 10, 11 and Annex II sectors 1–7 (Banking
and Financial Market Infrastructures excluded per brief).

---

## 1. ANSSI NIS2 entity register / MonEspaceNIS2

**There is no public, nominative register of French NIS2 essential/important entities.**

- ANSSI NIS2 directive page: https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/directives-nis-nis2-et-dispositif-saiv/directive-nis-2/
- MonEspaceNIS2 self-assessment portal: https://messervices.cyber.gouv.fr/nis2
- MonEspaceNIS2 help/FAQ (scope of entities): https://aide.monespacenis2.cyber.gouv.fr/fr/category/perimetre-des-entites-u2cyjx/
- FAQ on mandatory information entities must provide to the competent authority: https://aide.monespacenis2.cyber.gouv.fr/fr/article/quelles-sont-les-informations-obligatoires-quune-entite-regulee-par-la-directive-nis-2-doit-communiquer-a-lautorite-nationale-competente-19y0pxm/
- ANSSI Lab announcement — NIS2 space folded into MesServicesCyber: https://lab.cyber.gouv.fr/les-actualit%C3%A9s-du-lab-anssi/un-nouvel-espace-d%C3%A9di%C3%A9-%C3%A0-nis2-sur-messervicescyber/

**Status / confidentiality:**
- The draft law (projet de loi "Résilience") has ANSSI establish and maintain the list of essential entities, important entities and registrars based on entities' own self-declarations. The bill text (Sénat rapport) is at: https://www.senat.fr/rap/l24-393/l24-39314.html and https://www.senat.fr/rap/l24-393/l24-39313.html
- Self-registration happens via **MonEspaceNIS2**, which is a declaration/self-assessment tool for the entity itself ("Suis-je concerné?" eligibility test + registration channel), not a public directory. ANSSI contact for the portal: `monespacenis2@ssi.gouv.fr`.
- **No public search interface exists** to look up which named companies are registered. Perplexity found no official source describing a public, searchable NIS2 entity list for France. Minimum data entities must submit to ANSSI includes: entity name, sector/sub-sector, entity type, Member States where services are provided, and security contacts — but this is submitted *to* ANSSI, not published *by* ANSSI.
- Secondary/unverified commentary pages (not primary sources, flagged as lower quality — SEO/law-firm blogs): https://nis2-pro.fr/loi-resilience, https://www.nis-2-directive.com/Transposition/France.html, https://www.lexing.law/avocats/directive-nis2-champ-etendu-et-cybersecurite-renforcee/2026/03/10/

**Bottom line for outbound targeting: ANSSI gives you the regulatory criteria (sectors, thresholds) but no entity-level register. You cannot pull a target list from ANSSI/cyber.gouv.fr directly — you must build it from the business and sectoral registers below.**

---

## 2. National business registers — INSEE SIRENE and RNE

### INSEE SIRENE
- Open data bulk files: https://www.data.gouv.fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret
- Open-data API: https://www.data.gouv.fr/dataservices/api-sirene-open-data
- Full/non-diffusible API (partial-disclosure units included): https://www.data.gouv.fr/dataservices/api-sirene-dont-unites-a-diffusion-partielle
- INSEE documentation: https://www.insee.fr/fr/information/3591226
- Legal-category (legal form) code reference: https://entreprise.api.gouv.fr/catalogue/insee/unites_legales_diffusibles

**Public:** Yes. **Cost:** Free, under Licence Ouverte / Open Licence 2.0 (permits commercial reuse with attribution). API rate limit ~30 req/min on the open-data tier.

**Bulk download:** Yes — five stock/history files (current legal units, historical legal units, current establishments, historical establishments, establishment succession links) via data.gouv.fr, updated regularly, no per-record charge.

**Fields exposed:**
- Legal name — yes (denomination / `denominationUniteLegale`)
- SIREN / SIRET — yes, both (`siren` for legal unit, `siret` for establishment)
- Legal form — yes, but as a 4-digit code (`categorieJuridiqueUniteLegale`), not a plain-text label — needs a lookup table
- NAF/NACE code — yes, both current NAF Rev.2 (`activitePrincipaleUniteLegale` / `...Etablissement`) and the incoming NAF 2025 code (anticipated distribution from 16 Dec 2025)
- Registered address — yes, at establishment level (street, postal code, commune, geocoding)
- Employee count / size band (tranche d'effectif) — yes, as a banded code with reference date
- Turnover — **no**, not in SIRENE
- Website/domain — **no**
- Contact email — **no**
- Directors/officers — **no** (not in SIRENE; see RNE below)
- Status (active/head office flag/ceased, creation/closure dates) — yes

### RNE (Registre National des Entreprises), operated by INPI
- Public search portal: https://www.inpi.fr/ressources/propriete-intellectuelle/rechercher-une-entreprise-base-entreprises
- API base: https://registre-national-entreprises.inpi.fr/api ; companies endpoint: https://registre-national-entreprises.inpi.fr/api/companies
- Formalités API technical doc: https://www.inpi.fr/sites/default/files/2025-06/documentation%20technique%20API%20formalit%C3%A9s_v4.0.pdf
- API Entreprise government catalogue (aggregator): https://entreprise.api.gouv.fr/catalogue

**Public:** Yes for basic/public data via the portal; free. **API:** requires INPI account/credentials; non-confidential data presented as free but gated by authentication; query cap of 10,000 results per call noted in INPI's own technical doc, requiring partitioned extraction for bulk pulls.

**Bulk download:** INPI states bulk/reuse data access exists, but exact dataset layout, SFTP paths, quotas and any commercial-use conditions need confirmation directly with INPI (not fully documented in public sources found). **Flag: partially gated / needs account.**

**Fields exposed (beyond SIRENE):**
- SIREN, legal name, legal form, address, NAF/APE — same core as SIRENE
- **Representatives (dirigeants) / company officers — yes**, where legally accessible. This is the field SIRENE lacks.
- Beneficial owners — only where legally accessible (not universally public)
- Public acts, statutes, non-confidential annual accounts (filings since 2017)
- Turnover — not standard in the company-identity endpoint; may appear in filed annual accounts documents (unstructured, PDF) rather than as a queryable field
- Website/domain, contact email — **no**

**Practical split:** Use SIRENE (free, bulk, structured) for the base list (name, SIREN/SIRET, NAF, address, size band); use RNE/INPI (gated, rate-limited) only when you specifically need officer/director names or filed accounts.

---

## 3 & 4. Sectoral regulator registers, per Annex sector, with field exposure

### Annex I.1 — Energy (electricity, district heating/cooling, oil, gas, hydrogen)

| Sub-sector | Register | URL | Public | Bulk DL | Fields |
|---|---|---|---|---|---|
| Electricity/gas networks | No single CRE "authorised operators" register found. CRE publishes decisions/deliberations, not a structured entity list. The closest official list is the Ministry's "opérateurs autorisés" (electricity resale) PDF | https://www.cre.fr/ · https://www.data.gouv.fr/organizations/commission-de-regulation-de-lenergie/datasets · https://www.ecologie.gouv.fr/sites/default/files/documents/Site%20web%20-%20liste%20des%20op%C3%A9rateurs%20autoris%C3%A9s%20juillet%202025_0.pdf | Yes | No (PDF list only) | Legal name only in PDF; named network operators (RTE, Enedis, GRTgaz, Teréga, GRDF) are known entities, not a searchable register |
| District heating/cooling | France Chaleur Urbaine — national list of heat/cooling networks with named "gestionnaire" (operator) | https://france-chaleur-urbaine.beta.gouv.fr/reseaux (filterable by network/commune/operator) · bulk traces: https://www.data.gouv.fr/datasets/traces-des-reseaux-de-chaleur-et-de-froid | Yes | Yes (open data, geographic traces + attributes) | Operator/gestionnaire name, network name, commune, maître d'ouvrage; no SIREN/NAF/turnover/contact fields confirmed |
| Oil/hydrogen pipelines | None found — no national register of pipeline operators identified; information is dispersed across DREAL/prefecture permitting files | — | No | No | — |

### Annex I.2 — Transport (air, rail, water, road)

| Sub-sector | Register | URL | Public | Bulk DL | Fields |
|---|---|---|---|---|---|
| Air | DGAC lists of French carriers (licence d'exploitation), aircraft/helicopter operators with valid CTA (certificat de transporteur aérien), declared commercial balloon operators | https://www.ecologie.gouv.fr/politiques-publiques/transport-public-prive (landing page); direct PDFs e.g. https://www.ecologie.gouv.fr/sites/default/files/documents/Liste_exploitants_avions_avec_certificat_transporteur_aerien_valide.pdf and https://www.ecologie.gouv.fr/sites/default/files/documents/Liste_compagnies_aeriennes_francaises_autorisees.pdf | Yes | No — PDF only, not structured CSV/API (data.gouv.fr DGAC org page https://www.data.gouv.fr/organizations/direction-generale-de-laviation-civile/datasets exists but relevant dataset is traffic stats, not the operator registry) | Legal/trade name of carrier/operator; CTA validity; no SIREN/address/employee fields in the PDFs as described |
| Rail | EPSF — list of railway undertakings with valid safety certificate + infrastructure managers with valid safety authorisation | https://www.securite-ferroviaire.fr/nos-activites/delivrer-les-autorisations and https://www.securite-ferroviaire.fr/espace-grand-public/les-exploitants-ferroviaires | Yes | Not confirmed as structured bulk file (appears to be dated list/page, edition dated 9 July 2026) | Entity name, certificate/authorisation status; ART (https://www.autorite-transports.fr/le-ferroviaire/) publishes separate economic/access data, not the authorisation registry itself |
| Water (maritime/fluvial) | No single unified register. VNF publishes a list of fluvial (inland waterway) carriers by goods type; Fédération des ports de commerce publishes a port/member directory; Ministère de la Mer publishes port lists and the French-flag merchant fleet by shipowner | VNF: https://www.vnf.fr/vnf/app/uploads/2026/03/Transporteurs_fluviaux_en_France_liste-VNF_20260319.pdf · Ports federation: https://www.port.fr/liste-des-membres · Ports/Mer ministry: https://www.mer.gouv.fr/acteurs-reseau-et-activites-portuaires-en-france · French fleet: https://www.mer.gouv.fr/la-marine-marchande-en-france | Yes (all PDFs/pages) | No — PDF/HTML lists, not structured open data | Operator/company name and contact details in VNF PDF; vessel/shipowner name in fleet list; no SIREN/NAF/employee/turnover fields confirmed |
| Road | RNTC (Registre national des transports) — national list of licensed road freight carriers, passenger carriers, and transport commissionaires | https://www.ecologie.gouv.fr/politiques-publiques/liste-entreprises-inscrites-registre-electronique-national-entreprises | Yes | **Yes** — national ZIP downloads for freight and passenger carriers, updated Mondays/Thursdays; also per-department PDF breakdowns (e.g. https://www2.transports.developpement-durable.gouv.fr/registres/marchandises/61.pdf) | Company name, licence type/validity (community licence, domestic transport licence); department-level PDFs also list address; no confirmed NAF/turnover/employee/contact-email fields |

### Annex I.5 — Health

| Register | URL | Public | Bulk DL | Fields |
|---|---|---|---|---|
| FINESS (Fichier National des Établissements Sanitaires et Sociaux) | Search/export portal: https://finess.esante.gouv.fr/fininter/jsp/index.jsp · Open-data "structures"/"activités" flows: https://www.data.gouv.fr/datasets/referentiel-finess-t-finess and https://www.data.gouv.fr/datasets/finess-extraction-des-equipements-sociaux-et-medico-sociaux · FHIR API docs (ANS forge): https://www.data.gouv.fr (via esante.gouv.fr) https://esante.gouv.fr/produits-services/repertoire-finess | Yes | Yes — open-data JSON/CSV extracts, plus FHIR API ("FINESS Data/FINESS+") | FINESS geographic number, **SIRET**, **SIREN**, legal name/denomination, establishment category, parent legal-entity FINESS number, full address, phone/fax, legal status, authorisation/opening/closure dates, tariff-setting mode, activities/authorisations. **Employee count is NOT a FINESS field** — must be joined to SIRENE via SIRET for tranche d'effectif. No turnover, website, or contact-email field confirmed. |

### Annex I.6 — Drinking water / Annex I.7 — Waste water

| Register | URL | Public | Bulk DL | Fields |
|---|---|---|---|---|
| SISPEA (Observatoire national des services d'eau et d'assainissement) | Download portal: https://www.services.eaufrance.fr/pro/telechargement · Consultation portal: https://www.services.eaufrance.fr/sispea/ · data.gouv.fr datasets, e.g. https://www.data.gouv.fr/datasets/services-publics-deau-potable-description-et-indicateurs-de-performance-2/ and https://www.data.gouv.fr/datasets/services-publics-dassainissement-non-collectif-description-et-indicateurs-de-performance-1 | Yes | Yes — annual files by competence (drinking water, collective/non-collective sanitation), Licence Ouverte 2.0, updated weekly | SISPEA service ID, year, competence type, service name, organising-authority (collectivité) name and ID, **SIREN of the collectivité where available**, department/region/geo codes, mode de gestion (direct/delegated), **name of the gestionnaire/operator**, population served, number of communes served, price/performance indicators. **Caveat: the "operator" field is frequently the public authority itself (régie/syndicat), not a private company** — must cross the "mode de gestion" field to isolate private delegataires. No turnover, employee count, website, or contact-email fields confirmed. |

### Annex I.8 — Digital infrastructure (IXP, DNS, TLD, cloud, data centre, CDN, trust services, electronic communications)

| Sub-sector | Register | URL | Public | Bulk DL | Fields |
|---|---|---|---|---|---|
| Electronic communications networks/services | ARCEP — "Identifiants de communications électroniques" and "Ressources en numérotation téléphonique" open datasets | https://www.data.gouv.fr/datasets/identifiants-de-communications-electroniques · https://www.data.gouv.fr/datasets/ressources-en-numerotation-telephonique · ARCEP operator landing page: https://www.arcep.fr/mes-demarches-et-services/acteurs-regules/operateurs-telecoms.html | Yes | Yes — CSV, Licence Ouverte, updated weekly | Legal entity name/identifier, numbering resources assigned, linkage between operator ID and name. Note: France operates on a general declaration regime (not individual licensing) for most operators, so this is a declared-operator identifier list, not a "licensed operator" register in the strict sense. No address/NAF/employee/turnover fields confirmed in the dataset description. |
| DNS / TLD (.fr registry) | AFNIC — directory of accredited .fr/.re/.yt/.pm/.wf/.tf registrars | https://www.afnic.fr/noms-de-domaine/tout-savoir/annuaire-bureaux-enregistrement/ | Yes | Not confirmed as a single bulk file — appears to be a paginated HTML directory (several hundred entries) | Registrar name and contact details/services offered. No SIREN/NAF/employee/turnover fields confirmed. |
| Cloud (qualified providers) | ANSSI SecNumCloud — list of qualified cloud providers (IaaS/PaaS/SaaS/CaaS) | https://cyber.gouv.fr/offre-de-service/solutions-certifiees-et-qualifiees/services-de-securite-evalue/solutions-en-cours-de-qualification/prestataires-secnumcloud/ and full catalogue https://cyber.gouv.fr/offre-de-service/solutions-certifiees-et-qualifiees/catalogue-produits-services-certifies-qualifies | Yes | No — HTML listing | **This is a voluntary qualification scheme, not an exhaustive register of all cloud providers in France.** Only lists providers who sought SecNumCloud qualification. Fields: provider name, qualified service name/type, qualification status/version. No SIREN/address/employee/turnover/contact fields. |
| Data centre / CDN | None found — no French public register specific to data centre operators or CDN providers | — | No | No | — |
| Trust services (eIDAS) | ANSSI "Liste nationale de confiance" (French Trusted List) of qualified trust service providers | https://cyber.gouv.fr/reglementation/reglementation-identite-confiance-numerique/securite-echanges-voie-electronique/reglement-eidas/la-liste-nationale-de-confiance/ · English version: https://cyber.gouv.fr/french-trusted-list/ | Yes | Yes — machine-readable **XML** export available from the same page | Provider name, qualified service(s) offered, supervision status. No SIREN/address/employee/turnover/contact-email fields confirmed. |

### Annex I.9 — ICT service management B2B (MSP/MSSP)

**None found.** There is no French licensing register or public directory specific to managed service providers or managed security service providers. ANSSI's "prestataires labellisés" page (https://messervices.cyber.gouv.fr/prestataires-labellises) lists providers who have obtained voluntary ANSSI qualifications (e.g. incident response, audit, PAMS secure administration) — this is the closest proxy but covers only qualified providers, not the market. Source confirming the absence: synthesis query against ANSSI, DORA ICT-register (which is a private register financial entities must hold, not public), and public-procurement portals (PLACE/BOAMP, which gate by tender, not by a standing MSP register). https://messervices.cyber.gouv.fr/prestataires-labellises · https://acpr.banque-france.fr/system/files/2024-12/20241218_Notice_DORA_TIC.pdf (DORA ICT register — confirms it is held by the regulated financial entity, not published).

### Annex I.10 — Public administration

**None found.** No sectoral licensing register applies to public-administration bodies as NIS2 entities (they are identified by their legal status as State/territorial bodies, not via a regulator's authorisation register). Public-procurement portals (PLACE: https://www.marches-publics.gouv.fr ; BOAMP: https://www.boamp.fr/pages/recherche/) index procurement activity but are not an entity-scope register for NIS2 purposes.

### Annex I.11 — Space

| Register | URL | Public | Bulk DL | Fields |
|---|---|---|---|---|
| LOS (loi relative aux opérations spatiales) authorisations, administered by CNES | https://cnes.fr/fr/loi-relative-aux-operations-spatiales (CNES explainer); application procedure: https://entreprendre.service-public.fr/vosdroits/F35128 | **No single exhaustive public register confirmed.** The CNES page explains the authorisation regime but Perplexity found no searchable public list of all LOS-authorised operators. | No | — To verify authorisation status, the practical route found is to request the authorisation reference directly from CNES or the operator — not a self-service register. |

### Annex II.1 — Postal and courier

| Register | URL | Public | Bulk DL | Fields |
|---|---|---|---|---|
| ARCEP — list of postal operators authorised by ARCEP | https://www.arcep.fr/mes-demarches-et-services/acteurs-regules/operateurs-postaux/les-operateurs-de-services-postaux-autorises-par-larcep.html | Yes | Not confirmed as structured bulk file (appears to be an HTML/PDF list); separate data.gouv.fr "Observatoire du courrier et du colis" dataset (https://www.data.gouv.fr/datasets/observatoire-du-courrier-et-du-colis/informations) is aggregated market statistics, not an entity-level register | Operator name/coordinates, activities, coverage area, authorisation decisions, franking marks. No SIREN/NAF/employee/turnover/contact-email fields confirmed. |

### Annex II.2 — Waste management / Annex II.3 — Chemicals

| Register | URL | Public | Bulk DL | Fields |
|---|---|---|---|---|
| Géorisques — ICPE (Installations Classées pour la Protection de l'Environnement), covering both waste-handling ICPE (rubriques 27xx/3510/3550) and Seveso chemical sites | National/regional/departmental downloads: https://www.georisques.gouv.fr/donnees/bases-de-donnees/installations-industrielles · Searchable database: https://www.georisques.gouv.fr/risques/installations/donnees | Yes | **Yes — CSV + GIS (WMS/WFS) formats, national/regional/departmental/annual extracts, updated daily** | Operator/legal name ("raison sociale"), full address, geocoordinates, establishment number, **SIRET**, activity status, ICPE regime (déclaration/enregistrement/autorisation), **Seveso status (seuil haut/bas)**, IED/MTD status, ICPE nomenclature rubriques (filterable to isolate waste codes 27xx/3510/3550 or Seveso sites). No SIREN-level rollup provided directly (SIRET only — one company may have multiple SIRET), and no NAF/employee/turnover/website/contact-email fields confirmed. This is the strongest concrete pull of all the sectoral registers for field richness. |

### Annex II.4 — Food (wholesale and industrial only)

| Register | URL | Public | Bulk DL | Fields |
|---|---|---|---|---|
| DGAL — établissements agréés (notably under EC Regulation 853/2004) | Landing page: https://agriculture.gouv.fr/etablissements-agrees · Full list page: https://agriculture.gouv.fr/tous-les-etablissements-agrees-certifies-autorises-ou-enregistres-par-la-dgal · Direct PDF: https://fichiers-publics.agriculture.gouv.fr/dgal/ListesOfficielles/ETAB_AGR_853.pdf · related data.gouv.fr dataset (animal feed establishments): https://www.data.gouv.fr/datasets/liste-des-etablissements-agrees-au-titre-du-reglement-ce-ndeg183-2005-2 | Yes | Partial — some lists are PDF only (ETAB_AGR_853.pdf); animal-feed establishments dataset is on data.gouv.fr in structured form | Establishment name/address and approval reference in the PDF list. **Caveat confirmed by source: there is no single national list specifically labelled "wholesale food distributors"** — coverage depends on whether the establishment falls under sanitary approval (853/2004) vs. a mere declaration to the local DDPP/DDETSPP, which is not centrally published. No SIRET/NAF/employee/turnover/contact fields confirmed in the 853 PDF list. |

### Annex II.5 — Manufacturing (medical devices; NACE C26–C30)

| Register | URL | Public | Bulk DL | Fields |
|---|---|---|---|---|
| Medical devices — custom-made devices | ANSM list of manufacturers/persons responsible for placing custom-made medical devices on the market | https://ansm.sante.fr/documents/reference/declarations-des-dispositifs-medicaux/liste-des-responsables-de-la-mise-sur-le-marche-des-dispositifs-medicaux-sur-mesure | Yes | Not confirmed as structured bulk (periodically updated list) | Manufacturer name and contact details. **Limited scope: covers only custom-made devices, not standard medical devices.** |
| Medical devices — standard devices | **No French national public register.** Registration of manufacturers/importers/authorised representatives for standard medical devices occurs at EU level under Eudamed (Regulation (EU) 2017/745, Article 31) | Eudamed context noted but no direct Eudamed URL verified in this research pass | EU-level, not France-specific | — | — |
| NACE C26–C30 (electronics, electrical equipment, machinery, motor vehicles, other transport equipment) | **None found.** No France-specific sectoral licensing register exists for these NACE codes as a class — these manufacturers are identified via SIRENE/RNE NAF codes only, not a sectoral regulator list | — | — | — | Use SIRENE NAF filtering (C26, C27, C28, C29, C30) as the only concrete enumeration path |

### Annex II.6 — Digital providers (online marketplaces, search engines, social networking platforms per NIS2)

**None found.** No France-specific licensing or authorisation register exists for this category; these are typically large multinational platforms identified individually, not enumerated via a national register.

### Annex II.7 — Research

**None found.** No sectoral licensing register identified for research organisations as defined by NIS2; such entities would need to be identified via SIRENE/RNE (NAF research codes) or institutional directories (e.g. ministry lists of public research bodies), not a regulator-held authorisation register.

---

## 5. NIS2 transposition status in France

**Law:** *Projet de loi relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité* (the "loi Résilience"), transposing NIS2, the CER Directive, and certain DORA-adjacent provisions.

**Status as of 2026-10-13: NOT YET IN FORCE.**
- Senate adopted the bill at first reading on 12 March 2025.
- The National Assembly's special committee adopted an amended version in September 2025.
- Plenary examination at the National Assembly was scheduled to begin 7 October 2026 but was **postponed** due to parliamentary-calendar congestion; no new firm date had been set as of 13 October 2026.
- Sources: https://www.nis-2-directive.com/Transposition/France.html · https://next.ink/brief-article/alleluia-la-transposition-de-nis2-est-enfin-a-lordre-du-jour-de-lassemblee-nationale/ · https://www.silicon.fr/cybersecurite-1371/nis2-ce-quil-faut-attendre-du-projet-de-loi-examine-a-lassemblee-nationale-229520 · https://www.lefigaro.fr/economie/cybersecurite-l-examen-du-projet-de-loi-resilience-a-nouveau-repousse-malgre-l-augmentation-de-la-menace-20261006 · https://www.clubic.com/actualite-632920-la-loi-nis2-encore-reportee-nouveau-camouflet-pour-la-cybersecurite-en-france.html

**Registration duty / deadline:**
- No legally applicable registration deadline has been published, because the law is not yet in force. ANSSI has indicated registration and initial obligations are expected to follow promulgation, with full compliance phased over roughly three years, per one secondary source (law-firm blog, not a primary legal text — flagged as lower-confidence): https://www.mirabile-avocat.com/blog/nis2-transposition-france
- The underlying **EU NIS2 transposition deadline (17 October 2024) has already passed**, meaning France is in delay relative to its EU obligation. Source: https://www.lefigaro.fr/economie/cybersecurite-l-examen-du-projet-de-loi-resilience-a-nouveau-repousse-malgre-l-augmentation-de-la-menace-20261006

**Article 20(2) management-body training obligation — separately enforceable/fineable in France?**
- **Not yet.** Until the French transposition law enters into force, NIS2's Article 20(2) does not by itself provide a domestic legal basis for a French administrative fine against a private entity for failing to train management-body members.
- The draft framework (once in force) is expected to give ANSSI supervisory/enforcement powers (warnings, binding instructions, compliance orders, sanctions) and to carry NIS2's standard maximum fine tiers — up to €10M or 2% of global turnover for essential entities, up to €7M or 1.4% for important entities, whichever is higher.
- A failure to train directors specifically would likely be folded into a broader governance/risk-management infringement finding rather than sanctioned as a standalone training violation. NIS2 also allows (as a last resort) temporary prohibition of individuals from management functions — distinct from a personal fine for missed training.
- Source (law-firm/compliance blog, flagged — not a primary legal source, use as directional only): https://nis-solutions.eu/countries/france/ ; general Art. 20(2) reference: https://www.nis2-info.eu/regulation/nis2/article/20/governance ; secondary tracker: https://www.openkritis.de/eu/eu-nis-2-france.html

---

## Summary recommendation for outbound list-building

1. **Base list:** Pull the SIRENE bulk open-data files (free, structured, SIREN/SIRET/NAF/address/size-band) and filter by NAF codes mapped to each Annex I/II sector.
2. **Enrich for officers/contacts:** Cross SIREN against RNE/INPI (gated, rate-limited) only for the subset you intend to approach, to get director names.
3. **Sector-confirm and prioritize:**
   - Strongest concrete pulls: **Géorisques ICPE** (waste/chemicals, has SIRET + Seveso flag + daily CSV), **RNTC** (road transport, has bulk ZIP), **FINESS** (health, has SIRET/SIREN + structured API), **SISPEA** (water, bulk annual files), **ARCEP open data** (electronic comms, weekly CSV).
   - Weak/PDF-only pulls requiring manual extraction: DGAC (air), EPSF (rail), VNF/ports (water transport), CRE (energy networks), ARCEP postal, AFNIC registrar directory, ANSSI SecNumCloud/trust-list, DGAL food.
   - No register exists at all: ICT MSP/MSSP, public administration, space (LOS), oil/hydrogen pipelines, data centre/CDN, digital providers, research, NACE C26-30 manufacturing generally, standard (non-custom) medical devices.
4. **No usable NIS2-specific entity list exists from ANSSI.** Do not plan the target list around ANSSI/MonEspaceNIS2 — it is a self-assessment and declaration tool, not a directory.
5. **Timing:** French NIS2 obligations (registration duty, fines, Article 20(2) enforceability) are not yet live as of 13 October 2026. This is itself a sales angle — prospects should be told the law is delayed but EU-level exposure (17 Oct 2024 deadline) already passed, and French enactment could move quickly once the Assembly calendar clears.
