import React from "react"
import Image from "next/image"

import logo from "@/components/assets/Buidl.png"

export default function TermsAndConditions() {
  return (
    <section className="relative z-40">
      <div className="flex justify-between p-5">
        <Image alt="logo" src={logo} className="w-28" />
        <a href="/">
          <p>Return to the home page.</p>
        </a>
      </div>
      <div className="space-y-5 px-16 py-10">
        <h1 className="text-2xl font-bold" id="top">
          TERMS AND CONDITIONS
        </h1>
        <p className="italic text-amber-400">Last updated September 05, 2023</p>
        <h1 className="text-lg font-bold">AGREEMENT TO OUR LEGAL TERMS</h1>
        <p>
          We are Silan Industries Pty (Ltd) (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;), a
          company registered in South Africa at 36 Neethling Close, Kunene Park,
          Port Elizabeth, East Cape 6025. Our VAT number is 4770293936.
        </p>
        <p>
          We operate the website https://www.silan.co.za (the &apos;Site&apos;), as well
          as any other related products and services that refer or link to these
          legal terms (the &apos;Legal Terms&apos;) (collectively, the &apos;Services&apos;).
        </p>
        <p>
          You can contact us by phone at +27 (0)60 320 7122, email at
          shane@silan.co.za, or by mail to 36 Neethling Close, Kunene Park, Port
          Elizabeth, East Cape 6025, South Africa.
        </p>
        <p>
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (&apos;you&apos;), and Silan
          Industries Pty (Ltd), concerning your access to and use of the
          Services. You agree that by accessing the Services, you have read,
          understood, and agreed to be bound by all of these Legal Terms. IF YOU
          DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY
          PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE
          IMMEDIATELY.
        </p>
        <p>
          Supplemental terms and conditions or documents that may be posted on
          the Services from time to time are hereby expressly incorporated
          herein by reference. We reserve the right, in our sole discretion, to
          make changes or modifications to these Legal Terms from time to time.
          We will alert you about any changes by updating the &apos;Last updated&apos;
          date of these Legal Terms, and you waive any right to receive specific
          notice of each such change. It is your responsibility to periodically
          review these Legal Terms to stay informed of updates. You will be
          subject to, and will be deemed to have been made aware of and to have
          accepted, the changes in any revised Legal Terms by your continued use
          of the Services after the date such revised Legal Terms are posted.
        </p>
        <p>
          All users who are minors in the jurisdiction in which they reside
          (generally under the age of 18) must have the permission of, and be
          directly supervised by, their parent or guardian to use the Services.
          If you are a minor, you must have your parent or guardian read and
          agree to these Legal Terms prior to you using the Services.
        </p>
        <p className="italic text-amber-400">
          We recommend that you print a copy of these Legal Terms for your
          records.
        </p>
        <h1 className="pt-10 text-2xl font-bold">TABLE OF CONTENTS</h1>
        <div className="grid grid-cols-1 gap-1">
          <a href="#t1">1. OUR SERVICES</a>
          <a href="#t2">2. INTELLECTUAL PROPERTY RIGHTS</a>
          <a href="#t3">3. USER REPRESENTATIONS</a>
          <a href="#t4">4. PROHIBITED ACTIVITIES</a>
          <a href="#t5">5. USER GENERATED CONTRIBUTIONS</a>
          <a href="#t6">6. CONTRIBUTION LICENCE</a>
          <a href="#t7">7. SERVICES MANAGEMENT</a>
          <a href="#t8">8. PRIVACY POLICY</a>
          <a href="#t9">9. TERM AND TERMINATION</a>
          <a href="#t10">10. MODIFICATIONS AND INTERRUPTIONS</a>
          <a href="#t11">11. GOVERNING LAW</a>
          <a href="#t12">12. DISPUTE RESOLUTION</a>
          <a href="#t13">13. CORRECTIONS</a>
          <a href="#t14">14. DISCLAIMER</a>
          <a href="#t15">15. LIMITATIONS OF LIABILITY</a>
          <a href="#t16">16. INDEMNIFICATION</a>
          <a href="#t17">17. USER DATA</a>
          <a href="#t18">
            18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES 19.
            CALIFORNIA USERS AND RESIDENTS
          </a>
          <a href="#t20">20. MISCELLANEOUS</a>
          <a href="#t21">21. CONTACT US</a>
        </div>
        <h1 id="t1" className="pt-10 text-lg font-bold">
          1. OUR SERVICES
        </h1>
        <p>
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </p>
        <p>
          The Services are not tailored to comply with industry-specific
          regulations (Health Insurance Portability and Accountability Act
          (HIPAA), Federal Information Security Management Act (FISMA), etc.),
          so if your interactions would be subjected to such laws, you may not
          use the Services. You may not use the Services in a way that would
          violate the Gramm-Leach-Bliley Act (GLBA).
        </p>
        <h1 id="t2" className="pt-10 text-lg font-bold">
          2. INTELLECTUAL PROPERTY RIGHTS
        </h1>
        <h1 className="font-semibold">Our intellectual property</h1>
        <p>
          We are the owner or the licensee of all intellectual property rights
          in our Services, including all source code, databases, functionality,
          software, website designs, audio, video, text, photographs, and
          graphics in the Services (collectively, the &apos;Content&apos;), as well as the
          trademarks, service marks, and logos contained therein (the &apos;Marks&apos;).
        </p>
        <p>
          Our Content and Marks are protected by copyright and trademark laws
          (and various other intellectual property rights and unfair competition
          laws) and treaties in the United States and around the world.
        </p>
        <p>
          The Content and Marks are provided in or through the Services &apos;AS IS&apos;
          for your personal, non-commercial use or internal business purpose
          only.
        </p>
        <h1 className="font-semibold">Your use of our Services</h1>
        <p>
          Subject to your compliance with these Legal Terms, including the
          &apos;PROHIBITED ACTIVITIES&apos; section below, we grant you a non-exclusive,
          non-transferable, revocable licence to:
        </p>
        <ul className="list-disc pl-10">
          <li>access the Services; and</li>
          <li>
            download or print a copy of any portion of the Content to which you
            have properly gained access.
          </li>
        </ul>
        <p>
          solely for your personal, non-commercial use or internal business
          purpose.
        </p>
        <p>
          Except as set out in this section or elsewhere in our Legal Terms, no
          part of the Services and no Content or Marks may be copied,
          reproduced, aggregated, republished, uploaded, posted, publicly
          displayed, encoded, translated, transmitted, distributed, sold,
          licensed, or otherwise exploited for any commercial purpose
          whatsoever, without our express prior written permission.
        </p>
        <p>
          If you wish to make any use of the Services, Content, or Marks other
          than as set out in this section or elsewhere in our Legal Terms,
          please address your request to: shane@silan.co.za. If we ever grant
          you the permission to post, reproduce, or publicly display any part of
          our Services or Content, you must identify us as the owners or
          licensors of the Services, Content, or Marks and ensure that any
          copyright or proprietary notice appears or is visible on posting,
          reproducing, or displaying our Content.
        </p>
        <p>
          We reserve all rights not expressly granted to you in and to the
          Services, Content, and Marks.
        </p>
        <p>
          Any breach of these Intellectual Property Rights will constitute a
          material breach of our Legal Terms and your right to use our Services
          will terminate immediately.
        </p>
        <h1 className="font-semibold">Your submissions</h1>
        <p>
          Please review this section and the &apos;PROHIBITED ACTIVITIES&apos; section
          carefully prior to using our Services to understand the (a) rights you
          give us and (b) obligations you have when you post or upload any
          content through the Services.
        </p>
        <p>
          Submissions: By directly sending us any question, comment, suggestion,
          idea, feedback, or other information about the Services
          (&apos;Submissions&apos;), you agree to assign to us all intellectual property
          rights in such Submission. You agree that we shall own this Submission
          and be entitled to its unrestricted use and dissemination for any
          lawful purpose, commercial or otherwise, without acknowledgment or
          compensation to you.
        </p>
        <p>
          You are responsible for what you post or upload: By sending us
          Submissions through any part of the Services you:
        </p>
        <ul className="list-disc pl-10">
          <li>
            confirm that you have read and agree with our &apos;PROHIBITED
            ACTIVITIES&apos; and will not post, send, publish, upload, or transmit
            through the Services any Submission that is illegal, harassing,
            hateful, harmful, defamatory, obscene, bullying, abusive,
            discriminatory, threatening to any person or group, sexually
            explicit, false, inaccurate, deceitful, or misleading;
          </li>
          <li>
            to the extent permissible by applicable law, waive any and all moral
            rights to any such Submission;
          </li>
          <li>
            warrant that any such Submission are original to you or that you
            have the necessary rights and licences to submit such Submissions
            and that you have full authority to grant us the above- mentioned
            rights in relation to your Submissions; and
          </li>
          <li>
            warrant and represent that your Submissions do not constitute
            confidential information.
          </li>
        </ul>
        <p>
          You are solely responsible for your Submissions and you expressly
          agree to reimburse us for any and all losses that we may suffer
          because of your breach of (a) this section, (b) any third party’s
          intellectual property rights, or (c) applicable law.
        </p>
        <h1 id="t3" className="pt-10 text-lg font-bold">
          3. USER REPRESENTATIONS
        </h1>
        <p>
          By using the Services, you represent and warrant that: (1) you have
          the legal capacity and you agree to comply with these Legal Terms; (2)
          you are not a minor in the jurisdiction in which you reside, or if a
          minor, you have received parental permission to use the Services; (3)
          you will not access the Services through automated or non-human means,
          whether through a bot, script or otherwise; (4) you will not use the
          Services for any illegal or unauthorised purpose; and (5) your use of
          the Services will not violate any applicable law or regulation.
        </p>
        <p>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </p>
        <h1 id="t4" className="pt-10 text-lg font-bold">
          4. PROHIBITED ACTIVITIES
        </h1>
        <p>
          You may not access or use the Services for any purpose other than that
          for which we make the Services available. The Services may not be used
          in connection with any commercial endeavours except those that are
          specifically endorsed or approved by us.
        </p>
        <p>As a user of the Services, you agree not to:</p>
        <ul className="list-disc pl-10">
          <li>
            Systematically retrieve data or other content from the Services to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us. Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </li>
          <li>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Services, including features that prevent or
            restrict the use or copying of any Content or enforce limitations on
            the use of the Services and/or the Content contained therein.
          </li>
          <li>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Services.
          </li>
          <li>
            Use any information obtained from the Services in order to harass,
            abuse, or harm another person. Make improper use of our support
            services or submit false reports of abuse or misconduct.
          </li>
          <li>
            Use the Services in a manner inconsistent with any applicable laws
            or regulations.
          </li>
          <li>Engage in unauthorised framing of or linking to the Services.</li>
          <li>
            Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party’s uninterrupted use and enjoyment of the
            Services or modifies, impairs, disrupts, alters, or interferes with
            the use, features, functions, operation, or maintenance of the
            Services.
          </li>
          <li>
            Engage in any automated use of the system, such as using scripts to
            send comments or messages, or using any data mining, robots, or
            similar data gathering and extraction tools.
          </li>
          <li>
            Delete the copyright or other proprietary rights notice from any
            Content.
          </li>
          <li>
            Attempt to impersonate another user or person or use the username of
            another user.
          </li>
          <li>
            Upload or transmit (or attempt to upload or to transmit) any
            material that acts as a passive or active information collection or
            transmission mechanism, including without limitation, clear graphics
            interchange formats (&apos;gifs&apos;), 1×1 pixels, web bugs, cookies, or
            other similar devices (sometimes referred to as &apos;spyware&apos; or
              &apos;passive collection mechanisms&apos; or &apos;pcms&apos;).
          </li>
          <li>
            Interfere with, disrupt, or create an undue burden on the Services
            or the networks or services connected to the Services.
          </li>
          <li>
            Harass, annoy, intimidate, or threaten any of our employees or
            agents engaged in providing any portion of the Services to you.
          </li>
          <li>
            Attempt to bypass any measures of the Services designed to prevent
            or restrict access to the Services, or any portion of the Services.
          </li>
          <li>
            Copy or adapt the Services&apos; software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.
          </li>
          <li>
            Except as permitted by applicable law, decipher, decompile,
            disassemble, or reverse engineer any of the software comprising or
            in any way making up a part of the Services.
          </li>
          <li>
            Except as may be the result of standard search engine or Internet
            browser usage, use, launch, develop, or distribute any automated
            system, including without limitation, any spider, robot, cheat
            utility, scraper, or offline reader that accesses the Services, or
            use or launch any unauthorised script or other software.
          </li>
          <li>
            Use a buying agent or purchasing agent to make purchases on the
            Services.
          </li>
          <li>
            Make any unauthorised use of the Services, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretences.
          </li>
          <li>
            Use the Services as part of any effort to compete with us or
            otherwise use the Services and/or the Content for any
            revenue-generating endeavour or commercial enterprise.
          </li>
        </ul>
        <h1 id="t5" className="pt-10 text-lg font-bold">
          5. USER GENERATED CONTRIBUTIONS
        </h1>
        <p>The Services does not offer users to submit or post content.</p>
        <h1 id="t6" className="pt-10 text-lg font-bold">
          6. CONTRIBUTION LICENCE
        </h1>
        <p>
          You and Services agree that we may access, store, process, and use any
          information and personal data that you provide and your choices
          (including settings).
        </p>
        <p>
          By submitting suggestions or other feedback regarding the Services,
          you agree that we can use and share such feedback for any purpose
          without compensation to you.
        </p>
        <h1 id="t7" className="pt-10 text-lg font-bold">
          7. SERVICES MANAGEMENT
        </h1>
        <p>
          We reserve the right, but not the obligation, to: (1) monitor the
          Services for violations of these Legal Terms; (2) take appropriate
          legal action against anyone who, in our sole discretion, violates the
          law or these Legal Terms, including without limitation, reporting such
          user to law enforcement authorities; (3) in our sole discretion and
          without limitation, refuse, restrict access to, limit the availability
          of, or disable (to the extent technologically feasible) any of your
          Contributions or any portion thereof; (4) in our sole discretion and
          without limitation, notice, or liability, to remove from the Services
          or otherwise disable all files and content that are excessive in size
          or are in any way burdensome to our systems; and (5) otherwise manage
          the Services in a manner designed to protect our rights and property
          and to facilitate the proper functioning of the Services.
        </p>
        <h1 id="t8" className="pt-10 text-lg font-bold">
          8. PRIVACY POLICY
        </h1>
        <p>
          We care about data privacy and security. By using the Services, you
          agree to be bound by our Privacy Policy posted on the Services, which
          is incorporated into these Legal Terms. Please be advised the Services
          are hosted in South Africa. If you access the Services from any other
          region of the world with laws or other requirements governing personal
          data collection, use, or disclosure that differ from applicable laws
          in South Africa, then through your continued use of the Services, you
          are transferring your data to South Africa, and you expressly consent
          to have your data transferred to and processed in South Africa.
        </p>
        <h1 id="t9" className="pt-10 text-lg font-bold">
          9. TERM AND TERMINATION
        </h1>
        <p>
          These Legal Terms shall remain in full force and effect while you use
          the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL
          TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
          NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
          REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
          WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
          APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION
          THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        </p>
        <p>
          If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </p>
        <h1 id="t10" className="pt-10 text-lg font-bold">
          10. MODIFICATIONS AND INTERRUPTIONS
        </h1>
        <p>
          We reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Services. We will not be liable to you or any third party for any
          modification, price change, suspension, or discontinuance of the
          Services.
        </p>
        <p>
          We cannot guarantee the Services will be available at all times. We
          may experience hardware, software, or other problems or need to
          perform maintenance related to the Services, resulting in
          interruptions, delays, or errors. We reserve the right to change,
          revise, update, suspend, discontinue, or otherwise modify the Services
          at any time or for any reason without notice to you. You agree that we
          have no liability whatsoever for any loss, damage, or inconvenience
          caused by your inability to access or use the Services during any
          downtime or discontinuance of the Services. Nothing in these Legal
          Terms will be construed to obligate us to maintain and support the
          Services or to supply any corrections, updates, or releases in
          connection therewith.
        </p>
        <h1 id="t11" className="pt-10 text-lg font-bold">
          11. GOVERNING LAW
        </h1>
        <p>
          These Legal Terms shall be governed by and defined following the laws
          of South Africa. Silan Industries Pty (Ltd) and yourself irrevocably
          consent that the courts of South Africa shall have exclusive
          jurisdiction to resolve any dispute which may arise in connection with
          these Legal Terms.
        </p>
        <h1 id="t12" className="pt-10 text-lg font-bold">
          12. DISPUTE RESOLUTION
        </h1>
        <h1>Informal Negotiations</h1>
        <p>
          To expedite resolution and control the cost of any dispute,
          controversy, or claim related to these Legal Terms (each a &apos;Dispute&apos;
          and collectively, the &apos;Disputes&apos;) brought by either you or us
          (individually, a &apos;Party&apos; and collectively, the &apos;Parties&apos;), the Parties
          agree to first attempt to negotiate any Dispute (except those Disputes
          expressly provided below) informally for at least thirty (30) days
          before initiating arbitration. Such informal negotiations commence
          upon written notice from one Party to the other Party.
        </p>
        <h1 className="font-semibold">Binding Arbitration</h1>
        <p>
          Any dispute arising out of or in connection with these Legal Terms,
          including any question regarding its existence, validity, or
          termination, shall be referred to and finally resolved by the
          International Commercial Arbitration Court under the European
          Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according
          to the Rules of this ICAC, which, as a result of referring to it, is
          considered as the part of this clause. The number of arbitrators shall
          be three (3). The seat, or legal place, or arbitration shall be Port
          Elizabeth, South Africa. The language of the proceedings shall be
          English. The governing law of these Legal Terms shall be substantive
          law of South Africa.
        </p>
        <h1 className="font-semibold">Restrictions</h1>
        <p>
          The Parties agree that any arbitration shall be limited to the Dispute
          between the Parties individually. To the full extent permitted by law,
          (a) no arbitration shall be joined with any other proceeding; (b)
          there is no right or authority for any Dispute to be arbitrated on a
          class-action basis or to utilise class action procedures; and (c)
          there is no right or authority for any Dispute to be brought in a
          purported representative capacity on behalf of the general public or
          any other persons.
        </p>
        <h1 className="font-semibold">
          Exceptions to Informal Negotiations and Arbitration
        </h1>
        <p>
          The Parties agree that the following Disputes are not subject to the
          above provisions concerning informal negotiations binding arbitration:
          (a) any Disputes seeking to enforce or protect, or concerning the
          validity of, any of the intellectual property rights of a Party; (b)
          any Dispute related to, or arising from, allegations of theft, piracy,
          invasion of privacy, or unauthorised use; and (c) any claim for
          injunctive relief. If this provision is found to be illegal or
          unenforceable, then neither Party will elect to arbitrate any Dispute
          falling within that portion of this provision found to be illegal or
          unenforceable and such Dispute shall be decided by a court of
          competent jurisdiction within the courts listed for jurisdiction
          above, and the Parties agree to submit to the personal jurisdiction of
          that court.
        </p>
        <h1 id="t13" className="pt-10 text-lg font-bold">
          13. CORRECTIONS
        </h1>
        <p>
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </p>
        <h1 id="t14" className="pt-10 text-lg font-bold">
          14. DISCLAIMER
        </h1>
        <p>
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
          AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
          FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
          OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE CONTENT OF
          ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL
          ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
          INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY
          DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND
          USE OF THE SERVICES, (3) ANY UNAUTHORISED ACCESS TO OR USE OF OUR
          SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR
          FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
          CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS,
          VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
          THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
          OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
          ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
          TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT
          WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT
          OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
          SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
          APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL
          NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
          TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
          SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY
          MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND
          EXERCISE CAUTION WHERE APPROPRIATE.
        </p>
        <h1 id="t15" className="pt-10 text-lg font-bold">
          15. LIMITATIONS OF LIABILITY
        </h1>
        <p>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
          HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS
          OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER
          OF THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH
          PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR 1000 ZAR. CERTAIN US
          STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED
          WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE
          LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS
          MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
        </p>
        <h1 id="t16" className="pt-10 text-lg font-bold">
          16. INDEMNIFICATION
        </h1>
        <p>
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys’ fees and expenses,
          made by any third party due to or arising out of: (1) use of the
          Services; (2) breach of these Legal Terms; (3) any breach of your
          representations and warranties set forth in these Legal Terms; (4)
          your violation of the rights of a third party, including but not
          limited to intellectual property rights; or (5) any overt harmful act
          toward any other user of the Services with whom you connected via the
          Services. Notwithstanding the foregoing, we reserve the right, at your
          expense, to assume the exclusive defence and control of any matter for
          which you are required to indemnify us, and you agree to cooperate, at
          your expense, with our defence of such claims. We will use reasonable
          efforts to notify you of any such claim, action, or proceeding which
          is subject to this indemnification upon becoming aware of it.
        </p>
        <h1 id="t17" className="pt-10 text-lg font-bold">
          17. USER DATA
        </h1>
        <p>
          We will maintain certain data that you transmit to the Services for
          the purpose of managing the performance of the Services, as well as
          data relating to your use of the Services. Although we perform regular
          routine backups of data, you are solely responsible for all data that
          you transmit or that relates to any activity you have undertaken using
          the Services. You agree that we shall have no liability to you for any
          loss or corruption of any such data, and you hereby waive any right of
          action against us arising from any such loss or corruption of such
          data.
        </p>
        <h1 id="t18" className="pt-10 text-lg font-bold">
          18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
        </h1>
        <p>
          Visiting the Services, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications we provide to you
          electronically, via email and on the Services, satisfy any legal
          requirement that such communication be in writing. YOU HEREBY AGREE TO
          THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
          RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS
          OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You
          hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by
          any means other than electronic means.
        </p>
        <h1 id="t19" className="pt-10 text-lg font-bold">
          19. CALIFORNIA USERS AND RESIDENTS
        </h1>
        <p>
          If any complaint with us is not satisfactorily resolved, you can
          contact the Complaint Assistance Unit of the Division of Consumer
          Services of the California Department of Consumer Affairs in writing
          at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834
          or by telephone at (800) 952-5210 or (916) 445-1254.
        </p>
        <h1 id="t20" className="pt-10 text-lg font-bold">
          20. MISCELLANEOUS
        </h1>
        <p>
          These Legal Terms and any policies or operating rules posted by us on
          the Services or in respect to the Services constitute the entire
          agreement and understanding between you and us. Our failure to
          exercise or enforce any right or provision of these Legal Terms shall
          not operate as a waiver of such right or provision. These Legal Terms
          operate to the fullest extent permissible by law. We may assign any or
          all of our rights and obligations to others at any time. We shall not
          be responsible or liable for any loss, damage, delay, or failure to
          act caused by any cause beyond our reasonable control. If any
          provision or part of a provision of these Legal Terms is determined to
          be unlawful, void, or unenforceable, that provision or part of the
          provision is deemed severable from these Legal Terms and does not
          affect the validity and enforceability of any remaining provisions.
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Legal
          Terms or use of the Services. You agree that these Legal Terms will
          not be construed against us by virtue of having drafted them. You
          hereby waive any and all defences you may have based on the electronic
          form of these Legal Terms and the lack of signing by the parties
          hereto to execute these Legal Terms.
        </p>
        <h1 id="t21" className="pt-10 text-lg font-bold">
          21. CONTACT US
        </h1>
        <p>
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at:
        </p>
        <ul className="list-disc pl-10">
          <li>Silan Industries Pty (Ltd)</li>
          <li>36 Neethling Close</li>
          <li>Kunene Park</li>
          <li>Port Elizabeth, East Cape 6025 South Africa</li>
          <li>Phone: +27 (0)60 320 7122</li>
          <li>shane@silan.co.za</li>
        </ul>
        <a className="italic text-slate-400" href="#top">
          Back to the top
        </a>
      </div>
    </section>
  )
}
