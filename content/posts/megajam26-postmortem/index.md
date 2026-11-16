---
title: 'HOT SET postmortem'
date: '2026-11-16'
author: 'Biloxi Studios Team'
excerpt: 'What we built for the 2026 Epic AI MegaJam, what worked, what did not, how the crew was laid out, and ten tips you can copy.'
coverImage: 'hotset-title-wide.webp'
ogImage: '/images/posts/megajam26-devlog/og-hotset-title.jpg'
---
<aside class="devlog-crosslink" style="margin:0 0 1.5rem;padding:1rem 1.25rem;border:1px solid rgba(255,255,255,.15);border-radius:8px">Want the play-by-play? <a href="/blog/megajam26-devlog">Read the jam devlog, written as it happened →</a></aside>
<p>By the HOT SET team: BizaNator (Verse programmer, AI tooling, storytelling) and RinEllaSky (technical artist, UI, visual cohesion), plus a crew of AI agents who never once asked for a coffee break. All times are Central (CST). HOT SET was made for the 2026 Epic AI MegaJam, Thursday 2026-11-12 to Sunday 2026-11-15.</p>
<h2>1. What we built</h2>
<p>HOT SET is a UEFN game in which you direct AI actors by voice. You pick a genre and a set, cast your actors, check your picks on a READY TO DIRECT screen and call Action. The actors perform the scene on their own while the cameras cut between them. You can cut in with notes: talk to an actor by voice, send a quick direction like "Bigger!", throw in a prop. Every take ends on a wrap sheet with box office, day rates, rent, stars and a streak, and what you earn buys new casts and sets. In the office, a Showrunner character takes your pitch by voice.</p>
<p>The game was submitted to the Epic AI MegaJam before the 7:59 PM deadline on Sunday, as a team version uploaded from the co-owner's workstation.</p>
<h2>2. Before the jam: the day an agent submitted the same asset 84 times</h2>
<p>Our first lesson arrived before the jam did. Around Epic's live stream, one of our AI agents hit a validation problem on an asset and, with the unshakeable confidence of a very fast intern, submitted the same asset again. And again. Eighty-four times. The studio account picked up an enforcement notice, which was eventually overturned, but the lesson cost us a few grey hairs.</p>
<p>What we took from it:
- <strong>Fix the private asset flags first.</strong> An asset that fails validation will keep failing no matter how many times you resubmit it. Fix the cause, then upload once.
- <strong>Agents need a leash.</strong> A fast, helpful agent will repeat a failed step faster than any human could.
- <strong>Agents need a fresh skill.</strong> So we wrote one: <code>uefn-upload-moderation-gate</code>, a small public skill that stops an agent from uploading an asset a second time before the validation problem is fixed. The skills, plus a few more small ones, are public: https://github.com/BiloxiStudios/hot-set</p>
<h2>3. Timeline (all times CST)</h2>
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
<td>we start the project from two of Epic's tutorial templates, the <a href="https://dev.epicgames.com/documentation/fortnite/conversations-template-in-fortnite">Conversations template</a> and the <a href="https://dev.epicgames.com/documentation/fortnite/user-interfaces-feature-template-in-unreal-editor-for-fortnite">User Interfaces feature template</a>, and check it into Perforce that night (9:38 PM); the menu UI comes in from the co-owner's kit the same evening (10:58 PM)</td>
</tr>
<tr>
<td>Fri Nov 13</td>
<td>cast cards, the shared UI kit, the first owner specs</td>
</tr>
<tr>
<td>Sat Nov 14, day</td>
<td>the first pad sessions; hazard prompts and quick-time events; the HOT SET art pack locked about 7:40 PM</td>
</tr>
<tr>
<td>Sat night to Sun early</td>
<td>overnight QA runs; the first real recordings with sound</td>
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
<td>the NPC action-list limit bites (see section 5)</td>
</tr>
<tr>
<td>Sun 5:24 PM and 5:36 PM</td>
<td>the two voice-lock fixes land</td>
</tr>
<tr>
<td>Sun about 6:21 PM</td>
<td>music first lands in the build; raised after it proved inaudible</td>
</tr>
<tr>
<td>Sun about 6:00 to 7:36 PM</td>
<td>promo-media rules read; thumbnails, trailer and upload folder built; the team version cut (7:36 PM)</td>
</tr>
<tr>
<td>Sun before 7:59 PM</td>
<td>submitted</td>
</tr>
</tbody>
</table>
<figure><img src="/images/posts/megajam26-postmortem/hotset-owner-20261112-2012.webp" alt="The first test: a debug director panel on the sound stage" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The first test: a debug director panel on the sound stage</figcaption></figure>

<figure><img src="/images/posts/megajam26-postmortem/hotset-owner-20261113-1911.webp" alt="The first Director&#x27;s Call menu" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The first Director&#x27;s Call menu</figcaption></figure>

<h2>4. What worked</h2>
<p><strong>One owner per area, one second reader per change.</strong> Every seat had a lane. Until late afternoon, every change was read by a second seat before the owner saw it, so most mistakes died before reaching a controller. The price of this is in section 5.</p>
<p><strong>Three honest labels.</strong> Every claim in QA and in the public devlog carried PLAYED (someone ran it), BUILT (it compiles and a second person read it) or NOT seen. It stopped us calling things done and gave the owners a clean list of what to test.</p>
<p><strong>Prove the cause before the fix.</strong> The two-shot bug had about 400 refusals in the logs and several wrong theories (we corrected our own diagnosis twice, which is a polite way of saying we were wrong twice). The cause was found by testing guesses one at a time: our own parked close-up cameras and held props sat on the line the camera uses to check that it can see the actor. The fix was a small change telling that check to ignore those objects, plus standing marks that put the two actors 2.5 to 3.8 metres apart instead of 8 to 18.</p>
<figure><img src="/images/posts/megajam26-postmortem/hotset-actors-mid-line-2.webp" alt="Two actors in one frame at last" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Two actors in one frame at last</figcaption></figure>

<p><strong>Smooth cameras, the second time.</strong> Scene Graph camera support is still experimental, so we did not want to risk shipping it. Our first cameras moved with TeleportTo and MoveTo, which run server-side in Verse and left choppy frames whenever a camera moved in a scene. The fix: parent each camera to a creative_prop and drive the prop with keyframe_animation. The animation then runs client-side and the moves came out smooth. If your camera looks like a flip-book, check who is moving it.</p>
<p><strong>Music, by a team of robots and a metronome.</strong> The stage music is built in layers. Each of the six genres has its own set of mood layers (a bed, a bright one, a driving one, a tense one and a sad one) that blend as the scene changes. A beat-clock MIDI per genre gives Verse a true beat to work from, and a mix ducks the music under the voices so you can hear the actors. The five genre themes were generated with ACE-Step running in ComfyUI, split into stems and timed with MIDI, then locked to the beat with Patchwork in UEFN; the Comedy theme is a Suno track BizaNator made (you can <a href="https://suno.com/s/JZzv9RQJkYjgFHAL">listen to it here</a>). All of it is AI-generated music, allowed by the jam rules.</p>
<p>We tested the two routes against each other. Suno gave better-sounding results and made MIDI and stem separation easier, but it needed browser control, so it was harder to fit into an automated workflow. With limited time, our own local ComfyUI server (ACE-Step, demucs for the stem splitting and friends) was faster and produced results good enough for a game, so it did the other five. We also wrote our own procedural music and sound synthesis: the menu and office loops, stings, and the trailer and shorts scores. When music first landed in the build at about 6:21 PM it was inaudible, a volume problem, and a small fix later it was heard.</p>
<p><strong>A QA seat that only records.</strong> Our QA agent never fixed anything. It kept a ledger of what was witnessed, by whom, in which build, so "done" always had a receipt.</p>
<p><strong>Compile-check everything, early, and scan everything public.</strong> Verse and widget changes were compile-checked before anyone was asked to read them. Every outward string and every recorded frame was scanned for names, codes, money amounts and account corners.</p>
<h2>5. What did not work (honest)</h2>
<p><strong>Voice lock.</strong> After a TALK, the next take played only that one actor's voice. The cause: the branch that handles TALK never flagged that the stage voice channel needed rebuilding. One flag, set at the right moment, fixed it. The owner said at 5:35 PM that the actors were keeping the correct notes.</p>
<p><strong>Notes flakiness.</strong> Actors keep some direction and miss some. One log saved about 2 of 5 notes with the original wording, a small sample; the owner later said notes were being kept. "Taking direction" shipped as PLAYED with a catch.</p>
<p><strong>The 2000-character action-list limit.</strong> At 5:21 PM a longer wording silenced the actors. The limit is real: the description text on each action field and the binding names and descriptions all count toward 2000 characters per NPC. (Field names did not count in our measurements.) We found the cause and wrote a trimmed version, but it never shipped. The final build runs the original wording.</p>
<p><strong>The collapsed-glyph trap.</strong> A key picture set to Collapsed in the designer re-shows itself while the game runs. We shipped a Triangle button picture next to TALK TO twice before understanding that (the owner on PS5: "Yes, an icon shows"). Version 3 removed all five glyphs. A real "A" picture of our own, swapped by input device, is next-time work.</p>
<figure><img src="/images/posts/megajam26-postmortem/hotset-qte-falling-light.webp" alt="The falling-light prompt with the wrong button picture" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The falling-light prompt with the wrong button picture</figcaption></figure>

<p><strong>Quick-time timing.</strong> One prompt logged its time as run out 2.25 s into an 8 s window, across a 2.24 s server hitch. We never found the cause, and the owner said nothing had been pressed. A fix was written and parked untested.</p>
<p><strong>Shelf-first friction.</strong> At least 135 changelists were shelved across the jam. The cause of the friction is binary files with exclusive locks: a widget held by one seat cannot be touched by another. A shelf, a hash, a read, then an owner pad: it caught real mistakes, and it cost hours on a four-day clock. Late on the last day the owner's rule changed ("stop shelving everything", 6:16 PM): fixes landed on the live session first and were read after.</p>
<p><strong>The squeal.</strong> The owner's console came back from a power cut with a 12 kHz squeal in the audio, and the whole crew spent a while hunting a voice-room feedback loop that did not exist. One walk out to the lobby ("it does not. xbox is going off") proved it was the console. A power cycle fixed it.</p>
<figure><img src="/images/posts/megajam26-postmortem/hotset-squeal-spectrograms.webp" alt="Spectrograms: the 12 kHz line was the console, not the island" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Spectrograms: the 12 kHz line was the console, not the island</figcaption></figure>

<p><strong>Testing on one pad at a time.</strong> We never witnessed a second person join or save in the final version. We make no claim about it.</p>
<p><strong>Promo-media rules, late.</strong> Epic's thumbnail and trailer rules were in the group by about 6 PM and the submission set was checked against them. The first title prototypes did not fit the slots (heavy painted text, AI-painted faces), so we made art-only versions. Read the media rules the day before.</p>
<h2>6. What we had to cut</h2>
<p>Every jam ends with a pile of ideas on the floor. Ours:</p>
<ul>
<li><strong>Styles.</strong> We have a couple of anime-style screenshots and a dream of switching looks per take. Post-process and 2D orthographic cameras changed the sets too much without more work, so the idea needs more testing.</li>
</ul>
<figure><img src="/images/posts/megajam26-postmortem/hotset-cut-anime-style-manor.webp" alt="One look we cut: anime post-process with a 2D ortho camera. Pretty, but it changed the sets too much." loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>One look we cut: anime post-process with a 2D ortho camera. Pretty, but it changed the sets too much.</figcaption></figure>

<ul>
<li><strong>A whole cinematic sequence and the tutorial.</strong> We simply ran out of time.</li>
<li><strong>90+ custom Scene Graph holdable props.</strong> We built them, and then found that NPC agents cannot move a holdable object the way a player can. We ran out of time to fix it.</li>
<li><strong>The prop thumbnail and the unlockable browser.</strong></li>
<li><strong>The third actor.</strong> The design originally had one, but the UI only felt right for two. Instead of cramming in another page and risking more UI breaks, it became a feature: play long enough, hit the quick-time event, and you could be visited by a Guest Star. Peely arrives with a nature-documentary narrator persona, "Peely crashes through the door", like an observer watching a lion stalk a hippo: the disaster it is about to walk into could go either way. It became a hit with our 12-year-old playtester, who was forced to play video games for four days straight (no, you can't do homework, you have to playtest!).</li>
</ul>
<figure><img src="/images/posts/megajam26-postmortem/hotset-guest-star-card.webp" alt="The GUEST STAR! card" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The GUEST STAR! card</figcaption></figure>

<ul>
<li><strong>More sets, biomes and time of day.</strong> There were a million other items we wanted. The sets, biomes and time-of-day options are in the build: ask the Director for a set, a biome and a time of day, and it loads. We want to open that up much further. We were surprised how well the language model responded when given enough structured options, and that opens up much more we want to explore.</li>
</ul>
<h2>7. The crew layout (names allowed)</h2>
<p><strong>Humans (2):</strong> the studio owner, who plays the build on a PS5 and PC and is the final yes; and the co-owner, who owns the art and UI look and tests on Xbox, working from the RYUJIN workstation.</p>
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
<td>operator: pad tests, devlog publishing, clean-ups, archives</td>
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
<figure><img src="/images/posts/megajam26-postmortem/hotset-crew-diagram-v2.webp" alt="The crew diagram" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The crew diagram</figcaption></figure>

<p><strong>Machines:</strong> HYDRA is a three-headed desktop (AMD, triple display) in the living room, our game-testing rig, assigned to the AI testers this time (it also serves as QA's docs client). DRAGON is an extra workstation (props, validation, pad runs). kristale-lap is the co-owner's laptop, brandon-lap the gate laptop.</p>
<p><strong>How work flows:</strong> an owner's note, then the lead's order in the group, then a seat does it on a shelf, a second seat reads it, the owner plays it on a pad (or the co-owner on Xbox), it lands with a changelist, and QA records it. Three gates: the second-seat read, the owner's yes, and QA's record. From 6:16 PM on the last day, changes went straight onto the live session first and were read after.</p>
<p><strong>Rules that mattered:</strong> one owner per area; pull first; numbered changelists only; nothing is done until someone saw it in a game session; never press Continue on a Verse validation modal; never print a secret.</p>
<h2>8. Starter tips (copyable)</h2>
<ol>
<li><strong>Put a leash on your agents.</strong> Gate every upload on a validation pass, and never let an agent resubmit a failed asset before the cause is fixed.</li>
<li><strong>Start from the official templates.</strong> Epic's Conversations template and UI feature template gave us a working base on day one.</li>
<li><strong>Label every claim.</strong> <code>PLAYED</code> = a person ran it. <code>BUILT</code> = it compiles and a second person read it. <code>NOT seen</code> = neither.</li>
<li><strong>One owner per area, one reader per change.</strong> Give each seat a folder. Never edit someone else's area.</li>
<li><strong>Compile first.</strong> Nobody reads code that does not compile.</li>
<li><strong>Prove the cause before the fix.</strong> Write each guess down, test one at a time, then change one thing.</li>
<li><strong>Check your NPC action list against the 2000-character limit.</strong> Action descriptions and binding names and descriptions all count. Trim early, not at 5 PM on deadline day.</li>
<li><strong>Never trust a Collapsed key picture.</strong> Remove the widget, do not hide it.</li>
<li><strong>Rebuild the voice channel after a talk,</strong> or the next take may play one voice.</li>
<li><strong>Smooth cameras: let the client animate.</strong> Parent the camera to a prop and use keyframe animation, instead of moving it with server-side calls.</li>
<li><strong>Do not claim what nobody has heard.</strong> No sound, music or voice claims in any text until a person has heard it.</li>
<li><strong>Read the promo-media rules the day before.</strong> Thumbnails need exact sizes and an art-only variant with no text; trailers are ProRes MOV, 15 to 30 seconds.</li>
</ol>
<h2>9. What's next</h2>
<p>We will keep polishing HOT SET over the next few weeks. Mobile needs better touch support (we did not playtest all the menus until after submission, so some do not tap yet, sorry). We are adding more characters and sets and refining the rest, and the public code will come soon. Island code coming soon (public release).</p>
<p><strong>PLAYTESTERS WANTED.</strong> If you would like to join the private playtest, join the Discord and reach out: <a href="https://discord.gg/fWHBt5kyjj">discord.gg/fWHBt5kyjj</a>. If you have feedback, good or bad (please, no AI hate), tell us on social media, on Discord, or by email at <a href="mailto:feedback@biloxistudios.com">feedback@biloxistudios.com</a>.</p>

<aside class="devlog-crosslink" style="margin:2rem 0 0;padding:1rem 1.25rem;border:1px solid rgba(255,255,255,.15);border-radius:8px">← <a href="/blog/megajam26-devlog">Back to the MegaJam26 devlog</a> · <a href="/projects/hot-set">HOT SET project page</a></aside>
