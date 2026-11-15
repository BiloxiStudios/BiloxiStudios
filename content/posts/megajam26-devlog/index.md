---
title: 'MegaJam26 Devlog'
date: '2026-11-14'
author: 'Biloxi Studios Team'
excerpt: 'A running devlog of our UEFN island for the GlassDoor MegaJam26 benefit jam, updated every few hours.'
coverImage: 'cover.webp'
---
<!-- live-board:start -->
<section id="live-board" class="devlog-live-board">
<h2>Live jam board</h2>
<p>Our task board for the jam, updated automatically about every 10 minutes.</p>
<iframe src="https://share.braindead.games/api/v1/public/artifacts/99fec6f9-b95a-4ad9-9704-b7e9a84b3d1a/sLfdg1r_ZkHRqmFrkTz83HadpdClXCnh7eisds1ERGc/index.html" title="MegaJam26 live jam board" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer" style="display:block;width:100%;height:900px;max-height:85vh;border:0;border-radius:8px;background:#171412"></iframe>
<p><a href="https://share.braindead.games/api/v1/public/artifacts/99fec6f9-b95a-4ad9-9704-b7e9a84b3d1a/sLfdg1r_ZkHRqmFrkTz83HadpdClXCnh7eisds1ERGc/index.html" target="_blank" rel="noopener noreferrer">Open the live board</a></p>
</section>
<hr />
<!-- live-board:end -->
<p>Follow along as we build a Fortnite island in UEFN for the <strong>GlassDoor MegaJam26</strong> benefit jam.
This page updates automatically every few hours, newest first, until the jam wraps on Sunday, November 15 at 7:59 PM Central.</p>
<p>Feeds: <a href="/feeds/megajam26.xml">RSS</a> &middot; <a href="/feeds/megajam26.json">JSON</a></p>
<hr />
<!-- devlog-sections -->
<section id="u-20261114-2117" class="devlog-entry">
<!-- section:u-20261114-2117 -->
<h2>Jam update: Sat 9:17 PM</h2>
<p><em><time datetime="2026-11-14T21:17:01-06:00">Saturday, November 14, 2026 at 9:17 PM Central</time></em></p>
<p>The team pushed 104 project updates across Verse gameplay code, art, props and materials, audio.</p>
</section><hr />
<section id="u-20261114-1817" class="devlog-entry">
<!-- section:u-20261114-1817 -->
<h2>Jam update: Sat 6:17 PM</h2>
<p><em><time datetime="2026-11-14T18:17:01-06:00">Saturday, November 14, 2026 at 6:17 PM Central</time></em></p>
<div class="devlog-written" data-key="51ec3fd48025">
<h3>Saturday afternoon: a controller run, a falling light, and a button that drew the wrong picture</h3>
<p>At 3 PM the owner sat down with a PlayStation 5 pad and played the island for about eight minutes. Nobody else&#x27;s hands were on it. It was the first run where the new quick-time moment, the falling stage light, was on screen for a real player, and it showed us what a pad run is for.</p>
<p>What worked, seen in the recording: when the light starts to fall, a ring and a button picture appear over the actor. Tapping the asked button three times saved the show, and the sheet paid out &quot;+$100 saved the show&quot;. The diner came up for every show, and the genre chose the world around it: a forest for Horror, then a jungle for Sci-Fi, each loaded in about three seconds.</p>
<p>What he hit:</p>
<ul><li>A button that drew the wrong picture. Any &quot;press as it closes&quot; moment showed a different button than the one it wanted, so it could not be won. The cause was a widget that quietly switches its own pictures back on whenever the controller layout refreshes. Each picture now sits in its own box, and it is the box that hides.</li><li>The wrong button did not count. Circle never reached the game as the button it was asked to be.</li><li>The wrap sheet closed in the second it opened, because the presses from the last moment were still arriving. Very short takes had the same cause: a second press right after Action cut the take.</li><li>The grey &quot;Talk (hold)&quot; card was still there during takes and over the menu.</li><li>A Horror opening that never spoke. In all five Horror shows in the logs, the Showrunner&#x27;s opening line stayed silent while other genres spoke. We do not know why yet; the next change tries plainer wording, and it is switched off until someone plays it.</li></ul>
<p>What was fixed by 3:38, with an honest label on each. All of these are in the build now, and none has been played again yet:</p>
<ul><li>The quick-time moment takes over the buttons while it is up and for two seconds after, so a mashed press can no longer cut the take or close the sheet.</li><li>Circle now answers it, and the moment asks only for Triangle, Square or Circle.</li><li>The picture fix described above.</li><li>The talk card stays hidden over menus and between takes, and comes back only for a real conversation.</li><li>The Showrunner waits 22 seconds, not 10, before her opening is sent again; a first line takes up to 16 seconds to start, and each resend was restarting her.</li><li>The interview camera sits further back and higher, so her office shows around her. The frame above, from before the change, is a face and a wall.</li><li>The first take of an episode now holds a three-second wide shot of the set before anyone speaks, and in the interview you can pick someone to talk to before the first take.</li><li>The props library grew from 71 to 94 props.</li></ul>
<p>The second picture shows the other way a moment can end: the show cancelled, &quot;The light came down, CUT!&quot;. That is the game doing what it should. It was the wrong picture that made it unfair, and that is what we spent the afternoon on.</p>
<figure><img src="/images/posts/megajam26-devlog/dl-1a0ded38cbff.webp" alt="MegaJam26 screenshot" loading="lazy" style="width:100%;height:auto;border-radius:8px" /></figure>
</div>
<p>The team pushed 95 project updates across Verse gameplay code, art, props and materials.</p>
</section><hr />
<section id="u-20261114-1517" class="devlog-entry">
<!-- section:u-20261114-1517 -->
<h2>Jam update: Sat 3:17 PM</h2>
<p><em><time datetime="2026-11-14T15:17:01-06:00">Saturday, November 14, 2026 at 3:17 PM Central</time></em></p>
<p>The team pushed 160 project updates across Verse gameplay code, art, props and materials, project files.</p>
</section><hr />
<section id="u-20261114-1217" class="devlog-entry">
<!-- section:u-20261114-1217 -->
<h2>Jam update: Sat 12:17 PM</h2>
<p><em><time datetime="2026-11-14T12:17:01-06:00">Saturday, November 14, 2026 at 12:17 PM Central</time></em></p>
<div class="devlog-written" data-key="1dab8db58db6">
<h3>Saturday, noon: first controller playtest, and one diner in two worlds</h3>
<p>Until this morning every full take had been played with a mouse and keyboard. Late this morning the game was played start to finish on a controller for the first time, two whole shows. Most of it held up. Two things did not, and both are ones a player would meet in the first minute.</p>
<p>The first is a talk prompt. Fortnite&#x27;s own &quot;Talk (hold)&quot; card for an actor stayed on the screen the whole time, menus included, where holding the button does nothing. The cause was ours: the game was pointing the player at an actor after every take instead of only while the director is giving notes. A change that points the player at an actor only during notes has been written. It has not been played yet.</p>
<p>The second is the wrap sheet at the end of a take. On the controller only one of its four buttons ever took a press. Looking inside the sheet turned up one real difference: the three buttons that failed each carry a small button icon, and that icon was catching mouse clicks meant for the button under it. The icons have been made click-through. Whether that also cures the controller we do not know yet; it may be a separate fault, and we are reading the logs from that session to find out. None of this counts as fixed until it is played on a controller again.</p>
<p>The bigger change today is that sets and biomes are being pulled apart. A set is the building and the marks the cameras use; a biome is the world around it. The goal is one diner that can stand in a desert or a forest, and later a city or a jungle. The two pictures below are views from the editor, not from a take: the same diner, with the desert around it and then the forest. The open water at the edges is the next thing to hide. It has not been seen in play yet, and a mistake in how the diner was tied to its desert was caught an hour ago, before anyone played it.</p>
<p>This morning a random Director&#x27;s Challenge was added too. At Action, each full take draws one goal, such as getting an actor to tell a joke, and pays a bonus if it happens. It is in the build and has not been played, so we cannot say how it feels.</p>
<figure><img src="/images/posts/megajam26-devlog/dl-4debfe76b67c.webp" alt="A fault we caught: the talk card on the left never leaves, and the director&#x27;s controls are missing after the wrap" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>A fault we caught: the talk card on the left never leaves, and the director&#x27;s controls are missing after the wrap</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-bb28df3b860d.webp" alt="Nine frames from one Castle take, ending on the wrap sheet" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Nine frames from one Castle take, ending on the wrap sheet</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-c1237b8fa492.webp" alt="The diner in the desert: an editor view, not a take" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The diner in the desert: an editor view, not a take</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-086c8445792e.webp" alt="The same diner in the forest: an editor view, not a take" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The same diner in the forest: an editor view, not a take</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-60e9bbb2239b.webp" alt="The wrap sheet: box office, day rates, rent, film and stars" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The wrap sheet: box office, day rates, rent, film and stars</figcaption></figure>
</div>
<p>2 more are in progress. The team pushed 58 project updates across Verse gameplay code, art, props and materials, audio.</p>
<h3>In progress</h3><ul><li>Reusable biomes: any set can load inside a city, desert, jungle or forest biome (biome layer first, then the set layer)</li><li>Persona Director (stretch): on-set challenges - QTE to save the show (e.g. falling light)</li></ul>
</section><hr />
<section id="u-20261114-0917" class="devlog-entry">
<!-- section:u-20261114-0917 -->
<h2>Jam update: Sat 9:17 AM</h2>
<p><em><time datetime="2026-11-14T09:17:01-06:00">Saturday, November 14, 2026 at 9:17 AM Central</time></em></p>
<p>The team pushed 22 project updates across Verse gameplay code, art, props and materials.</p>
</section><hr />
<section id="u-20261114-0617" class="devlog-entry">
<!-- section:u-20261114-0617 -->
<h2>Jam update: Sat 6:17 AM</h2>
<p><em><time datetime="2026-11-14T06:17:01-06:00">Saturday, November 14, 2026 at 6:17 AM Central</time></em></p>
<div class="devlog-written" data-key="a9220d836f72">
<h3>Saturday, 6:00 AM: one take, read like a film strip</h3>
<p>Dev log entry for Saturday November 14, 2026, at six in the morning. Every picture marked &quot;from the game&quot; is a real take played overnight.</p>
<p>At midnight the camera in our castle set was looking at the back of a wall. This is the same set six hours later, one frame for each line of an eight-line scene, in order:</p>
<p>The speaker is in the picture in all eight frames, with a face you can read in seven. No walls. One back of a head. We have been keeping that count all night, because &quot;it looks better&quot; is not a measurement:</p>
<ul><li>2 AM, three sets: no speaker&#x27;s face in any frame, and the camera on the wrong actor five times in nine.</li><li>4 AM, the castle: speaker in frame four times in eight, a bare wall once.</li><li>5 AM: six in eight.</li><li>6 AM: eight in eight.</li></ul>
<p>Three things got it there, and none of them was clever. The standing spots the cameras could not see were found by measuring every one of them and moved a few steps. The camera was stopped from cutting away to the listener more than twice a take. And the actors now turn slightly toward the audience when they talk to each other, as stage actors always have.</p>
<p>The same playing turned up a mistake that had been in front of us for hours: the character cast as the ghoul had been walking around in someone else&#x27;s costume, a hooded figure in red and black. The casting was fine; one entry in her costume record pointed at the wrong character. She is herself again in the strip above.</p>
<p>The space station was played for the first time tonight too. Its windows look onto a field of stars, and when the scene turns dangerous the whole bridge goes red for eight seconds.</p>
<p>What still is not right as the sun comes up: a second show in the same sitting does not start by itself, one actor wandered off the set mid-scene, and nobody has yet played a full show with a controller in their hands. Today is for those, and for the people who make this game to wake up and play it.</p>
<figure><img src="/images/posts/megajam26-devlog/dl-976284b39cfa.webp" alt="From the game: every line of one take in the castle" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>From the game: every line of one take in the castle</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-c3094d66a972.webp" alt="From the game: red alert on the space station" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>From the game: red alert on the space station</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-064b4ecdf2d7.webp" alt="All eight sets, each seen from where its audience sits" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>All eight sets, each seen from where its audience sits</figcaption></figure>
</div>
<p>The team pushed 80 project updates across Verse gameplay code, art, props and materials, audio.</p>
</section><hr />
<section id="u-20261114-0317" class="devlog-entry">
<!-- section:u-20261114-0317 -->
<h2>Jam update: Sat 3:17 AM</h2>
<p><em><time datetime="2026-11-14T03:17:01-06:00">Saturday, November 14, 2026 at 3:17 AM Central</time></em></p>
<div class="devlog-written" data-key="968624bc7bd1">
<h3>Saturday, 3:00 AM: the camera learns to look at the person talking</h3>
<p>Dev log entry for Saturday November 14, 2026, written at three in the morning. Pictures marked &quot;from the game&quot; are real takes played tonight.</p>
<p>Two hours ago we opened every set like a stage so the cameras could see in. Then we did the only thing that proves anything: we played it, set after set, and wrote down what each frame actually showed.</p>
<p>The first pass was humbling. Four sets, sixteen lines of dialogue, and a simple count: a blank wall in the picture, zero times. That was the fix working. The speaker&#x27;s face in the picture: also zero times. The camera no longer hid behind walls, but it was framing chests and elbows, and five times out of nine it was pointed at the actor who was listening.</p>
<p>So the camera got three new rules before the next pass. Show the one who is speaking. Aim at the face, not the middle of the body. And never choose a shot you have not checked. We played the same three sets again with the same cast.</p>
<p>The second count: wrong actor, none. Shots with nothing usable in them, none, where there had been nine. One true close-up of a speaking face, one two-shot worth keeping. That is not finished. Heads still get cut off when the camera lands beside an actor, and the western town&#x27;s wide shot makes its cast look like ants. But it is the first time tonight the game looked like someone was directing it.</p>
<p>Horror turned out to have its own problem: darkness. Measured from the frames, a horror scene was about a seventh as bright as a daylight one. We did not want to wash the mood out, so the rule we settled on has two halves: a wide shot must always be bright enough to read, and a close-up may stay as dark as it likes so long as a face or a pair of eyes comes through. Each actor now carries a stronger light in dark scenes, and a follow spot finds whoever is speaking.</p>
<p>The other thing seen in the game for the first time tonight is the end of a take. It used to stop on a plain cut screen. Now the curtain comes down on a sheet that says &quot;That&#x27;s a wrap&quot;: what the take made at the box office, what the cast, the location and the film cost, how many stars it earned, a one-line tip, and your director level.</p>
<p>That sheet also taught us the night&#x27;s most useful lesson. It trapped our tester: no click and no key would close it. The cause was a single unticked setting that says whether a panel is allowed to take focus. With it off, every instruction to focus the panel was ignored without a word of complaint. The same setting explains why nothing had ever answered a controller. It is ticked now, and written into our rules.</p>
<p>Elsewhere tonight: the director&#x27;s office, where every show starts, went from a concrete yard to a room with posters, trophies and a film camera; the count of hand props we have modelled reached seventy-one, each with its own icon; and the space station got a red alert.</p>
<p>Still not done at three o&#x27;clock: nobody has seen a prop in an actor&#x27;s hand, wide shots at night are too dark, and no one has yet played a full show with a controller. Those are next.</p>
<figure><img src="/images/posts/megajam26-devlog/dl-48a8b3392bf4.webp" alt="From the game: the first real two-shot, in the castle, both actors large in the frame" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>From the game: the first real two-shot, in the castle, both actors large in the frame</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-fc2a1b4bd5cb.webp" alt="From the game: a speaker&#x27;s face in close-up, for the first time" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>From the game: a speaker&#x27;s face in close-up, for the first time</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-5fe804b85c6f.webp" alt="From the game: horror in the haunted manor after the lighting change" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>From the game: horror in the haunted manor after the lighting change</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-f30570d5dbf8.webp" alt="From the game: the end-of-take sheet" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>From the game: the end-of-take sheet</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-11e8288c08db.webp" alt="The director&#x27;s office, dressed tonight" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The director&#x27;s office, dressed tonight</figcaption></figure>
</div>
<p>The team pushed 116 project updates across Verse gameplay code, art, props and materials, audio.</p>
</section><hr />
<section id="u-20261114-0129" class="devlog-entry">
<!-- section:u-20261114-0129 -->
<h2>Jam update: Sat 1:29 AM</h2>
<p><em><time datetime="2026-11-14T01:29:19-06:00">Saturday, November 14, 2026 at 1:29 AM Central</time></em></p>
<div class="devlog-written">
<h3>Saturday, 1:30 AM: the night we opened every set</h3>
<p>Dev log entry for Saturday November 14, 2026. Written overnight. Pictures are from the editor unless a caption says they are from the game.</p>
<p>The last thing we were told before the studio went to sleep was blunt: most of the time you cannot see the show. The camera sits behind a wall, or looks at the back of a prop, while two AI actors perform a scene nobody can watch. For a game about directing a show, that is the one fault that cannot ship.</p>
<p>So tonight we stopped fixing blocked shots one playtest at a time and measured all of them. A script stands a figure on every spot an actor can use, on every set, and from each spot tries every camera position the game is able to choose: the wide shot, close-ups, over-the-shoulder, pans, dollies, the crane. For each one it asks a simple question: is anything between the lens and this actor&#x27;s face?</p>
<p>The first numbers were hard to read. In the castle, 30 camera lines in 100 reached an actor. In the old theatre, 40. In the jungle temple, 48. The widest shot, the one meant to show the whole scene, was blocked every single time on all three.</p>
<p>The cause turned out to be simple. Our cameras stand six to fourteen metres back, and the rooms are smaller than that. The lens was outside the building.</p>
<p>The fix is the oldest trick in film and television: a set is not a room, it is a stage with one wall missing. We opened every set on the side where the cameras work. Outer walls came off, a bay window and a tower roof left the castle, partitions and a vending machine left the theatre, a barn lost half its west wall. Each set also got a marker that says &quot;the audience sits here&quot;, and no camera is allowed to stand further back than it.</p>
<p>By a quarter past one, all eight sets measured between 90 and 99 clear lines in 100. The game&#x27;s own camera code changed too: every shot now checks that it can see its actor before it is used, and picks a different shot if it cannot.</p>
<p>Then we played it, and the game reminded us that a measurement is not a show. In the first take on the western town, every shot was rejected and replaced, because one actor was sitting in a chair that no camera could see, and our new rule insisted on seeing everyone. The picture below is from the build before tonight&#x27;s changes, and it is exactly the complaint we started with: the director&#x27;s panel is up, and behind it the camera is staring at a porch rail.</p>
<p>That chair has been moved and the rule corrected. The same shot gets taken again on the next build, and we will post it either way.</p>
<p>Other things that moved tonight:</p>
<ul><li>Money. A take now costs something: rent for the location, film for every take, and the cast&#x27;s day rates. It earns box office, a score in stars, and progress toward the next director level. The first take played on the new rules made $420, cost $350, and earned one star with the advice &quot;more emotions&quot;.</li><li>Props. Forty-five hand props of our own are modelled, with twenty-four new short animations for holding and using them. No actor has held one in the game yet; that test is running as this is written.</li><li>The game played itself, almost. For the first time one of our AI helpers drove the whole game by mouse, from the title screen through casting, the set, the genre and a full eight-line take to the final CUT, and then filed a list of everything that was wrong with the menus on the way.</li></ul>
<p>What is honest to say at half past one: the sets are open, the numbers are good, the code is in, and none of it has yet been watched working in a full take with the actors in every frame. That is what the rest of the night is for.</p>
<figure><img src="/images/posts/megajam26-devlog/dl-b0e5bd8d69d2.webp" alt="What the castle&#x27;s wide camera saw before tonight: the back of a wall" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>What the castle&#x27;s wide camera saw before tonight: the back of a wall</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-da9b6f72ac25.webp" alt="The castle after its fourth wall was opened, seen from the new audience marker" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The castle after its fourth wall was opened, seen from the new audience marker</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-03cc1a6c4629.webp" alt="The haunted manor as a stage: one wall gone, the dining hall open to the camera" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The haunted manor as a stage: one wall gone, the dining hall open to the camera</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-6cadd53696d3.webp" alt="From the game, before the fixes: the wide camera jammed against a porch rail, no actor in sight" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>From the game, before the fixes: the wide camera jammed against a porch rail, no actor in sight</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-8fa95deb1615.webp" alt="Eleven of the new hand props, two for each kind of show" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>Eleven of the new hand props, two for each kind of show</figcaption></figure>
<figure><img src="/images/posts/megajam26-devlog/dl-e16abed89d64.webp" alt="The end-of-take sheet, laid out and waiting for its numbers" loading="lazy" style="width:100%;height:auto;border-radius:8px" /><figcaption>The end-of-take sheet, laid out and waiting for its numbers</figcaption></figure>
</div>
<p>We&#x27;re deep into the weekend with about 42 hours still on the clock, and the team has been busy with 87 updates across gameplay code, art, props, materials, and audio. Right now we&#x27;re doing a big sight-line audit, checking every camera position against every set and then opening things up by pulling out walls and reworking layouts so the action is easy to see. No big milestones to announce just yet, but plenty of polish is landing behind the scenes. Stay tuned for visuals soon!</p>
<h3>In progress</h3><ul><li>Sight-line audit: trace every camera position against every set, then open the sets (walls out, layouts changed)</li></ul>
</section><hr />
<section id="u-20261114-0017" class="devlog-entry">
<!-- section:u-20261114-0017 -->
<h2>Jam update: Sat 12:17 AM</h2>
<p><em><time datetime="2026-11-14T00:17:01-06:00">Saturday, November 14, 2026 at 12:17 AM Central</time></em></p>
<p>1 more is in progress. The team pushed 89 project updates across Verse gameplay code, art, props and materials, audio.</p>
<h3>In progress</h3><ul><li>Key light on the actors: faces must be lit in every genre and weather (owner)</li></ul>
</section><hr />
<section id="u-20261113-2117" class="devlog-entry">
<!-- section:u-20261113-2117 -->
<h2>Jam update: Fri 9:17 PM</h2>
<p><em><time datetime="2026-11-13T21:17:01-06:00">Friday, November 13, 2026 at 9:17 PM Central</time></em></p>
<p>5 more are in progress. The team pushed 101 project updates across Verse gameplay code, art, props and materials, audio.</p>
<h3>In progress</h3><ul><li>Show fails to auto-start after the Showrunner interview; needs repeated prompts</li><li>Space Station must look like it is in space: windows, and space outside them</li><li>In-play director UI cannot be used with a controller: no focus set; dead while rolling (Rinella: &quot;this is not ok&quot;)</li><li>Extra shots per set: establishing shot, cutaways, tagged points of interest, more shot locations</li><li>Film Noir look is unviewable: the screen is solid grey fog (owner playtest)</li></ul>
</section><hr />
<section id="u-20261113-1817" class="devlog-entry">
<!-- section:u-20261113-1817 -->
<h2>Jam update: Fri 6:17 PM</h2>
<p><em><time datetime="2026-11-13T18:17:01-06:00">Friday, November 13, 2026 at 6:17 PM Central</time></em></p>
<p>We finished 3 items on the island. 1 more is in progress. The team pushed 101 project updates across Verse gameplay code, art, props and materials, audio.</p>
<h3>Done</h3><ul><li>Interview is a dead end: take bar captures input, hold-to-talk never reaches the Showrunner</li><li>SHIP BLOCKER: Verse Print() debug lines are drawn on the player&#x27;s screen</li><li>Menu mic path auto-rolls on defaults instead of the Director&#x27;s voice interview</li></ul>
<h3>In progress</h3><ul><li>Persona Director: animation lane - acting animations on the Fortnite mannequin skeleton (bind GestureAnimations)</li></ul>
</section><hr />
<section id="u-20261113-1517" class="devlog-entry">
<!-- section:u-20261113-1517 -->
<h2>Jam update: Fri 3:17 PM</h2>
<p><em><time datetime="2026-11-13T15:17:01-06:00">Friday, November 13, 2026 at 3:17 PM Central</time></em></p>
<p>The team pushed 46 project updates across Verse gameplay code, art, props and materials, audio.</p>
</section><hr />
<section id="u-20261113-1217" class="devlog-entry">
<!-- section:u-20261113-1217 -->
<h2>Jam update: Fri 12:17 PM</h2>
<p><em><time datetime="2026-11-13T12:17:01-06:00">Friday, November 13, 2026 at 12:17 PM Central</time></em></p>
<p>5 more are in progress. The team pushed 47 project updates across Verse gameplay code, art, props and materials, audio.</p>
<h3>In progress</h3><ul><li>EDGE 4: music and stings - generated genre beds first, then the owner&#x27;s Patchwork reactive pipeline (stems -&gt; MIDI -&gt; Patchwork -&gt; Song Sync -&gt; stage events)</li><li>All player UI as Widget Blueprints: convert the Verse-built menu and take bar (animations, sounds, IA_ glyphs, mobile + controller)</li><li>EDGE 2: witness run and fix loop until one plain take is clean (voice path WORKS or HIDDEN)</li><li>EDGE 3: one-press loop - ACTION / CUT / NEW SHOW on screen, auto-roll, reopenable menu, less dead air (the menu must be fixed)</li><li>EDGE 6: freeze, capture, declare, dev log (Glass Box), submit by Sunday 17:00 CST</li></ul>
</section><hr />
<section id="u-20261113-0617" class="devlog-entry">
<!-- section:u-20261113-0617 -->
<h2>Jam update: Fri 6:17 AM</h2>
<p><em><time datetime="2026-11-13T06:17:01-06:00">Friday, November 13, 2026 at 6:17 AM Central</time></em></p>
<p>The team pushed 15 project updates across Verse gameplay code, art, props and materials.</p>
</section><hr />
<section id="u-20261113-0317" class="devlog-entry">
<!-- section:u-20261113-0317 -->
<h2>Jam update: Fri 3:17 AM</h2>
<p><em><time datetime="2026-11-13T03:17:01-06:00">Friday, November 13, 2026 at 3:17 AM Central</time></em></p>
<p>The team pushed 29 project updates across Verse gameplay code, art, props and materials.</p>
</section><hr />
<section id="u-20261113-0017" class="devlog-entry">
<!-- section:u-20261113-0017 -->
<h2>Jam update: Fri 12:17 AM</h2>
<p><em><time datetime="2026-11-13T00:17:01-06:00">Friday, November 13, 2026 at 12:17 AM Central</time></em></p>
<p>9 more are in progress. The team pushed 78 project updates across Verse gameplay code, art, props and materials, levels and maps, project files.</p>
<h3>In progress</h3><ul><li>Persona Director: director_ui_bridge so the UI can replace WBP_DirectorPanel without touching Director logic</li><li>Persona Director: EffectsSystem - realtime event triggers off the Director StageBus</li><li>UI: migrate Rinella&#x27;s new UI from RinProject_17_UI into Content/UI (owner decision)</li><li>Persona Director: episodes, points and unlocks (sets, themes, actors)</li><li>Persona Director: interactable set marks in all 11 sets (6-12 per set, tagged)</li><li>Persona Director: new genre locations (space station, spooky night forest, school, ice-cream shop)</li><li>Persona Director: player_data save system + session_data (owner request)</li><li>Persona Director: cast bios + day rates for the actor profile screen (IMDb-style)</li><li>First playable</li></ul>
</section><hr />
<section id="u-20261112-2117" class="devlog-entry">
<!-- section:u-20261112-2117 -->
<h2>Jam update: Thu 9:17 PM</h2>
<p><em><time datetime="2026-11-12T21:17:01-06:00">Thursday, November 12, 2026 at 9:17 PM Central</time></em></p>
<p>We finished 1 item on the island. 5 more are in progress. The team pushed 60 project updates across Verse gameplay code, art, props and materials, levels and maps, project files.</p>
<h3>Done</h3><ul><li>P0 Project: create the MegaJam26 UEFN project in Project/ and submit it (unblocks every lane)</li></ul>
<h3>In progress</h3><ul><li>P1 Gameplay: core loop - director_device + scene_set + edit_bay (Content/Gameplay)</li><li>UI: widget contract + HUD/menu/prompt spec (jam-ui)</li><li>P2 Props: prop kit for greybox + pickups/interactables (Content/Props)</li><li>P2 Level area 2: greybox the second area + dressing pass (Content/Levels/Area2)</li><li>P1 Gameplay: one-page game design (core loop, win/lose, 10-min session) for owner approval</li></ul>
</section><hr />

<section id="u-20261112-0935" class="devlog-entry">
<!-- section:u-20261112-0935 -->
<h2>MegaJam26 begins</h2>
<p><em><time datetime="2026-11-12T09:35:54-06:00">Thursday, November 12, 2026 at 9:35 AM Central</time></em></p>
<p>MegaJam26 is underway. Over the next few days our studio is building a brand-new Fortnite island in UEFN for the GlassDoor MegaJam26 benefit jam, and this devlog follows along from the first blank level to the final build. The jam runs until Sunday, November 15 at 7:59 PM Central. Today was all about getting set up: the team is in place, roles are assigned, the project and our task board are ready, and the first gameplay goals are on the list. Our studio team works alongside AI-assisted production tools, and this log itself is assembled automatically every few hours from our progress, then checked before it goes out. Check back for screenshots, clips and new features as the island comes together.</p>
</section><hr />
