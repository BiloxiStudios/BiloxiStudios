---
title: 'HOT SET postmortem'
date: '2026-11-16'
author: 'Biloxi Studios Team'
excerpt: 'What we built for the 2026 Epic AI MegaJam, what worked, what did not, how the crew was laid out, and ten tips you can copy.'
coverImage: 'hotset-title-wide.webp'
ogImage: '/images/posts/megajam26-devlog/og-hotset-title.jpg'
---
<aside class="devlog-crosslink" style="margin:0 0 1.5rem;padding:1rem 1.25rem;border:1px solid rgba(255,255,255,.15);border-radius:8px">Want the play-by-play? <a href="/blog/megajam26-devlog">Read the jam devlog, written as it happened →</a></aside>
<p>Written by mj-content, fact-checked by mj-level against the depot, scrubbed for public release by mj-qa. All times are Central (CST). HOT SET was made for the 2026 Epic AI MegaJam, Thursday 2026-11-12 to Sunday 2026-11-15.</p>
<h2>1. What we built</h2>
<p>HOT SET is a UEFN game in which you direct AI actors by voice. You pick a genre and a set, cast your actors, check your picks on a READY TO DIRECT screen and call Action. The actors perform the scene on their own while the cameras cut between them. You cut in with notes: talk to an actor by voice, send a quick direction like "Bigger!", throw in a prop. Every take ends on a wrap sheet with box office, day rates, rent, stars and a streak (the banner reads HOT SET since the end card landed at 7:33 PM), and what you earn buys new casts and sets. In the office, a Showrunner character takes your pitch by voice.</p>
<figure><img src="/images/posts/megajam26-postmortem/hotset-owner-20261112-2012.webp" alt="The earliest test: the debug director panel on the sound stage." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The earliest test: the debug director panel on the sound stage.</figcaption></figure>
<figure><img src="/images/posts/megajam26-postmortem/hotset-wrap-screen.webp" alt="The wrap sheet with the HOT SET banner." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The wrap sheet with the HOT SET banner.</figcaption></figure>

<p>What is in the final build (checked by mj-level against the Dev head manifest): menu and office music (CL 26583, volume raised in 26587), READY TO DIRECT (26614), pay pop-ups (26633), the Settings sheet, a Guest Star who walks on mid-take (Peely), the join-time voice fix (26539) and the silent-TALK fix (26547), How to Play #2 (26614), the dock overflow fix (26633) and the HOT SET end card (26654). What is not in it: the anime look (shelf 26135) and the new interface sounds (shelf 26409). Both are parked, not cut.</p>
<p>The game was submitted to the Epic AI MegaJam before the 7:59 PM CST deadline on Sunday, as a team version made from the co-owner's workstation (owner-confirmed, 8:12 PM).</p>
<h2>2. Timeline (all times CST)</h2>
<table>
<thead>
<tr>
<th>when</th>
<th>beat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Thu Nov 12, evening</td>
<td>the existing Persona Director baseline is imported (9:38 PM); the co-owner's menu UI follows (10:58 PM)</td>
</tr>
<tr>
<td>Fri Nov 13</td>
<td>cast cards, the shared UI kit, the first owner specs</td>
</tr>
<tr>
<td>Sat Nov 14, day</td>
<td>the owner's first pad sessions; hazard prompts and quick-time events; the HOT SET art pack locked about 7:40 PM</td>
</tr>
<tr>
<td>Sat night to Sun early</td>
<td>overnight QA runs; the first real recordings with sound; the owner clears the game audio for use in video</td>
</tr>
<tr>
<td>Sun morning</td>
<td>the two-shot finding: our own parked cameras were blocking the camera's sight check, so two-actor shots had never worked live</td>
</tr>
<tr>
<td>Sun afternoon</td>
<td>a Guest Star walks on (Peely lands 2:52 PM; the guest picture 3:59 PM)</td>
</tr>
<tr>
<td>Sun 5:21 PM</td>
<td>the registered-actions limit bites (see 4)</td>
</tr>
<tr>
<td>Sun 5:24 PM and 5:36 PM</td>
<td>the voice-lock fixes land: the join voice fix (CL 26539), then the silent-TALK fix (CL 26547)</td>
</tr>
<tr>
<td>Sun about 6:21 PM</td>
<td>music first lands in the build; raised after it proved inaudible</td>
</tr>
<tr>
<td>Sun about 6:00 to 7:36 PM</td>
<td>promo-media rules read; thumbnails, trailer and upload folder built; the co-owner's team version cut (7:36 PM)</td>
</tr>
<tr>
<td>Sun before 7:59 PM</td>
<td>submitted</td>
</tr>
</tbody>
</table>
<figure><img src="/images/posts/megajam26-postmortem/hotset-owner-20261113-1911.webp" alt="Friday: the first Director&#x27;s Call menu." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Friday: the first Director&#x27;s Call menu.</figcaption></figure>
<figure><img src="/images/posts/megajam26-postmortem/hotset-owner-20261113-2136.webp" alt="Friday: the show plan on an empty set." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Friday: the show plan on an empty set.</figcaption></figure>
<figure><img src="/images/posts/megajam26-postmortem/hotset-owner-20261114-1505.webp" alt="Saturday: the Showrunner interview." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Saturday: the Showrunner interview.</figcaption></figure>
<figure><img src="/images/posts/megajam26-postmortem/hotset-owner-20261114-1730.webp" alt="Saturday: the Showrunner, in the office." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Saturday: the Showrunner, in the office.</figcaption></figure>
<figure><img src="/images/posts/megajam26-postmortem/hotset-guest-star-card.webp" alt="Sunday afternoon: the Guest Star walks on." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Sunday afternoon: the Guest Star walks on.</figcaption></figure>

<h2>3. What worked</h2>
<p><strong>One owner per area, one second reader per change.</strong> Every seat had a lane. Until late afternoon, every change was read by a second seat before the owner saw it, so most mistakes died before reaching a pad. The price of this is in section 4.</p>
<p><strong>Three honest labels.</strong> Every claim in QA and in the public devlog carried PLAYED (someone ran it), BUILT (it compiles and a second person read it) or NOT seen. We wrote it into every devlog entry. It stopped us calling things done and gave the owners a clean way to know what to test.</p>
<p><strong>Prove the cause before the fix.</strong> By the crew's records, the two-shot bug had about 400 refusals in the logs and several wrong theories. The cause was found by testing guesses one at a time, then proving it in the editor: our own parked close-up cameras and held props sat on the line the camera uses to check that it can see the actor. The fix was a small change telling that check to ignore those objects, plus standing marks that put the two actors 2.5 to 3.8 metres apart instead of 8 to 18 (the crew's records).</p>
<figure><img src="/images/posts/megajam26-postmortem/hotset-actors-mid-line-2.webp" alt="Two actors in one frame, mid-line." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Two actors in one frame, mid-line.</figcaption></figure>
<figure><img src="/images/posts/megajam26-postmortem/hotset-castle-lounge.webp" alt="Two actors on the castle lounge set." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Two actors on the castle lounge set.</figcaption></figure>

<p><strong>A QA seat that only records.</strong> mj-qa never fixed anything. It kept a ledger of what was witnessed, by whom, in which build, so "done" always had a receipt.</p>
<p><strong>Compile-check everything, early.</strong> Verse and widget changes were compile-checked before a second person was asked to read them.</p>
<p><strong>Public-safety scans.</strong> Every outward string and every recorded frame was scanned: names, codes, dollar amounts, account corners on game frames (masked on every frame, checked at one frame per second).</p>
<figure><img src="/images/posts/megajam26-postmortem/hotset-owner-20261114-2307.webp" alt="A weather twist: the RAIN ON SET! card." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>A weather twist: the RAIN ON SET! card.</figcaption></figure>

<h2>4. What did not work (honest)</h2>
<p><strong>Voice lock.</strong> After a TALK, the next take played only that one actor's voice. mj-level's read gave the exact cause: the TalkLive branch never set <code>TalkedSinceChannel</code>, so the stage voice channel was not rebuilt after TALK. The fix sets it to true right after <code>TalkTargetSet</code> (CL 26547). <code>TalkDuringTake</code> is a separate placed-Director setting, false in the final build. The owner said at 5:35 PM that the actors were keeping the correct notes; mj-level did not hear it.</p>
<figure><img src="/images/posts/megajam26-postmortem/hotset-squeal-spectrograms.webp" alt="A 12 kHz squeal in the recordings: the console, not the island." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>A 12 kHz squeal in the recordings: the console, not the island.</figcaption></figure>

<p><strong>Notes flakiness.</strong> Actors keep some direction and miss some. One log saved about 2 of 5 notes with the original wording, a small sample; the owner later said notes were being kept. "Taking direction" shipped as PLAYED with a catch.</p>
<p><strong>The 2000-character registered-actions limit.</strong> At 5:21 PM a longer wording (CL 26513) silenced the actors. The limit is real: the field names, the <code>@ai_description</code> text and the binding names and descriptions all count toward 2000 characters per action set. We found the cause, and a trim exists (CL 26537: shorter <code>IsNote</code> description and <code>DirectorNote</code> binding text), but it was never shipped. The final build runs the original wording.</p>
<p><strong>The collapsed-glyph trap.</strong> A key picture (an ActionWidget) set to Collapsed in the designer re-shows itself while the game runs, from its input action. We shipped a Triangle button picture next to TALK TO twice before understanding it: the first version showed it (a pad frame), and the second showed it too (the owner on PS5: "Yes, an icon shows"). CL 26580 removed five glyphs outright. A real "A" picture of our own, swapped by input device, is next-time work.</p>
<figure><img src="/images/posts/megajam26-postmortem/hotset-director-call.webp" alt="The Director&#x27;s Call menu after a CUT, with the button picture next to TALK TO." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The Director&#x27;s Call menu after a CUT, with the button picture next to TALK TO.</figcaption></figure>

<p><strong>Quick-time timing.</strong> One prompt logged its time as run out 2.25 s into an 8 s window, across a 2.24 s server hitch. The cause was not found, and the owner said nothing had been pressed. A timer fix (CL 26625) was written and parked untested.</p>
<figure><img src="/images/posts/megajam26-postmortem/hotset-qte-falling-light.webp" alt="The falling-light prompt." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The falling-light prompt.</figcaption></figure>

<p><strong>Shelf-first friction.</strong> At least 135 changelists were shelved across the jam (124 archived and deleted by 8:13 PM, 11 kept on purpose, others still live). The cause of the friction is binary files with exclusive locks: a widget held by one seat cannot be added by another, so mj-level shelved a READY TO DIRECT version at a side path. A shelf, a hash, a read, then an owner pad: it caught real mistakes, and it cost hours on a four-day clock. The owner's rule changed late in the day ("stop shelving everything", 6:16 PM): fixes landed on the owner's live session first and were read after.</p>
<p><strong>Menu music.</strong> There was no menu or office music in the build before about 6:21 PM, and the first upload has none. When it landed it was inaudible because of volume (menu 0.35, office 0.3); CL 26587 raised it to 2.0 and 1.5, and the owner then heard it.</p>
<p><strong>Testing on one pad at a time.</strong> We never witnessed a second person join or save in the final version. An md5 check of the final upload against our manifest was not received, so we make no claim about it.</p>
<p><strong>Promo-media rules.</strong> Epic's thumbnail and trailer rules were in the group by about 6 PM, and the submission set was checked against them. Title prototypes that arrived later (7:48 PM) carried heavy painted text, a false "NO SCRIPT. NO CLUE. ALL CHAOS." line and AI-painted human faces, so they were rejected for the Epic slots.</p>
<h2>5. The crew layout (names allowed)</h2>
<p><strong>Humans (2):</strong> the studio owner, who plays the build on a PS5 and PC and is the final yes; and the co-owner, who owns the art and UI look and tests on Xbox, working from the RYUJIN workstation. Both write orders in "Thoughts" (owner decision threads).</p>
<p><strong>Agent seats (each is a Claude or Codex session on a named machine):</strong></p>
<table>
<thead>
<tr>
<th>seat</th>
<th>role</th>
<th>machine</th>
</tr>
</thead>
<tbody>
<tr>
<td>mj-lead</td>
<td>jam lead: reads every change, orders of the day, owner liaison, rulings</td>
<td>BRAINZ (AI server)</td>
</tr>
<tr>
<td>mj-gameplay</td>
<td>Verse gameplay (Director, actors, QTEs)</td>
<td>EROS</td>
</tr>
<tr>
<td>eros-claude</td>
<td>owner's build seat: stages, compiles and pushes to the owner's live session</td>
<td>EROS</td>
</tr>
<tr>
<td>mj-level</td>
<td>gate reader / fact-checker, placed level data, byte checks</td>
<td>brandon-lap</td>
</tr>
<tr>
<td>mj-ui</td>
<td>Widget Blueprints + UI Verse</td>
<td>kristale-lap</td>
</tr>
<tr>
<td>uefn-ryujin</td>
<td>UEFN / Verse seat at the co-owner's workstation, team upload</td>
<td>RYUJIN</td>
</tr>
<tr>
<td>mj-qa</td>
<td>witness ledger (records only)</td>
<td>HYDRA (docs client)</td>
</tr>
<tr>
<td>brain-chat</td>
<td>operator: pad tests via HYDRA helpers, devlog publishing, clean-ups, NAS archives</td>
<td>BRAINZ (drives HYDRA / DRAGON)</td>
</tr>
<tr>
<td>mj-content</td>
<td>devlog, compliance scans, submission texts</td>
<td>BRAINZ</td>
</tr>
<tr>
<td>mj-art, mj-anim, mj-audio</td>
<td>art, motion, sound</td>
<td>BRAINZ</td>
</tr>
</tbody>
</table>
<figure><img src="/images/posts/megajam26-postmortem/hotset-crew-diagram-v2.webp" alt="Who built HOT SET, and on what: 13 seats on 7 machines, and how a change moves through three gates." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Who built HOT SET, and on what: 13 seats on 7 machines, and how a change moves through three gates.</figcaption></figure>
<p><strong>Machines:</strong> HYDRA = test laptop for pad runs, and QA's docs client; DRAGON = an extra workstation (props, validation, pad runs); kristale-lap = the co-owner's laptop; brandon-lap = the gate laptop.</p>
<p><strong>How work flows:</strong> a Thought from an owner → mj-lead's order in the group → a seat does it on a shelf → mj-level reads → the owner plays it on a pad, or the co-owner on Xbox → it lands on Dev with a CL → mj-qa records. Three gates: the second-seat read, the owner's yes, and QA's record. Since 6:16 PM on the last day, by the owner's rule (some landings were already direct earlier that afternoon), changes go straight onto the owner's live session first and are read after; nothing waits on a shelf.</p>
<p><strong>Rules that mattered:</strong> one owner per area; pull first; numbered CLs only (descriptions start with the ticket key); nothing is done until someone saw it in a game session; never press Continue on a Verse validation modal; never print a secret.</p>
<h2>6. Starter tips (copyable)</h2>
<ol>
<li><strong>Label every claim.</strong> <code>PLAYED</code> = a person ran it. <code>BUILT</code> = it compiles and a second person read it. <code>NOT seen</code> = neither. Put the three words on every status line.</li>
<li><strong>One owner per area, one reader per change.</strong> Give each seat a folder. Never edit someone else's area.</li>
<li><strong>Compile first.</strong> Nobody reads code that does not compile.</li>
<li><strong>Prove the cause before the fix.</strong> Write each guess down, test one at a time, then change one thing. (Our two-shot bug: our own cameras blocked the sight check.)</li>
<li><strong>Check your registered NPC actions against the 2000-character limit.</strong> Field names, descriptions and binding names all count. Trim wording early, not at 5 PM on deadline day.</li>
<li><strong>Never trust a Collapsed key picture.</strong> An ActionWidget set Collapsed in the designer can re-show at runtime. Remove the widget, do not hide it.</li>
<li><strong>Rebuild the voice channel after a talk.</strong> If you can TALK to an actor between takes, make sure the stage voice is rebuilt afterwards, or the next take may play one voice.</li>
<li><strong>Persona prompt skeleton for an NPC actor:</strong> your role and set; a cheerful register; "you never speak for any company, game or real organization"; no scary, romantic, medical or personal talk; never ask for or use a real name.</li>
<li><strong>Do not claim what nobody has heard.</strong> No sound, music or voice-storage claims in any text until a person has heard it.</li>
<li><strong>Read the promo-media rules the day before.</strong> Thumbnails: exact sizes, art-only variant with no text. Trailer: MOV ProRes, 15 to 30 seconds. Leave 200 pixels clear top and bottom. Mask every account corner on every recorded frame and check at one frame per second.</li>
</ol>

<aside class="devlog-crosslink" style="margin:2rem 0 0;padding:1rem 1.25rem;border:1px solid rgba(255,255,255,.15);border-radius:8px">← <a href="/blog/megajam26-devlog">Back to the MegaJam26 devlog</a> · <a href="/projects/hot-set">HOT SET project page</a></aside>
