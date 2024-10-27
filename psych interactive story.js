var storyContent = ﻿{"inkVersion":20,"root":[["^You are Shawn Spencer, a \"Psychic\" who made your own detective agency with your best friend Burton \"Gus\" Guster. You have worked with the local police, the SBPD, for several years now.","\n","^You are on a ski vacation somewhere in British Colombia, with Gus and you see a man who seems very familiar, you swear you've seen him before, what was his name......?","\n",{"->":"Name"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Name":[["ev","str","^De...?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^De, De- something?","\n",{"->":"Name2"},{"#f":5}]}],{"#f":1}],"Name2":[["ev","str","^Despereaux!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^It's Pierre Despereaux, an internationally wanted Art Thief, you saw him on your good friend Carlton Lassiter's wall of criminals in his house.","\n","^Gus tries to convince you to let it go, as you are on vacation, you are not in your jurisdiction, and you would not be getting paid for catching this man.","\n",{"->":"Pursue"},{"#f":5}]}],{"#f":1}],"Pursue":[[["ev",{"^->":"Pursue.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Let the local authorities handle the affair after telling them you spotted Pierre Despereaux.",{"->":"$r","var":true},null]}],"ev","str","^Scream out his name and follow him down the ski slope.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["ev",{"^->":"Pursue.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"Ending1"},{"#f":5}],"c-1":["\n","^\"DESPEREAUX!\" You scream out, he looks back at you and starts to ski away, you and Gus chase after him","\n",{"->":"Escapes"},{"#f":5}]}],{"#f":1}],"Ending1":["^You are not a sleuth","\n","end",{"#f":1}],"Escapes":["^Despereaux escapes your chase as he is a very skilled skier.","\n","^You realize you are a fish out of water here, after talking back and forth with Gus for a couple minutes, you convince him to let you try and catch Despereaux.","\n",{"->":"Call"},{"#f":1}],"Call":[["ev","str","^Call Lassiter and the local police and inform them about Despereaux and work with them closely","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^You call Carlton Lassiter, your friend who you originally saw had a wanted poster of Despereaux in his house, he says do not chase after this guy and that he will be on his way there.","\n","^You go to the local police station and meet Robert Mackintosh and convince him of your psychic prowess by listing various facts about his colleagues that someone should not know.","\n",{"->":"CrimeScene"},{"#f":5}]}],{"#f":1}],"CrimeScene":["^Lasssiter, and his partner Juliet, land in British Colombia as you are making your way to the new crime scene. Here, Despereaux has stolen an expensive, baroque necklace. You walk into the crime scene and look around, a few minutes later Lassiter and Juliet arrive at the crime scene.","\n",{"->":"CrimeScene1"},{"->":"CrimeScene1"},{"#f":1}],"CrimeScene1":[[["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^There are zero signs of breaking and entering, no fingerprints dusted, everything is spotless, the only proof that a burglary occurred is the missing baroque necklace. Another clue is a still-burning expensive blonde cigarette in the owner's ashtray, Despereaux's calling card.",{"->":".^.^.29"},null],"s1":["pop","^Since the cigarette is still-burning, Despereaux must be in the building.",{"->":".^.^.29"},null],"s2":["pop",{"->":"Realization"},{"->":".^.^.29"},null],"s3":["pop",{"->":".^.^.29"},null],"#f":5}],"\n","ev","str","^Think...","/str",{"CNT?":".^.^"},"/ev",{"*":".^.c-0","flg":5},"ev","str","^Look around and search for clues.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n",{"->":"NothingFound"},{"#f":5}]}],{"#f":1}],"NothingFound":["^You find no clues or evidence that could help incriminate Despereaux.","\n",{"->":"Restaurant"},{"#f":1}],"Realization":["^You did not see him while going up the floors of the apartment, so he must be on the roof. You and Gus run up the stairs to the roof of the apartment complex after telling everyone you think he is on the roof.","\n",{"->":"AFool"},{"#f":1}],"AFool":["^You see Despereaux standing at the edge of the roof, and you call out to him. He turns around and is impressed that you found him, you tell him that in a few seconds Lassiter, his partner Juliet, and the RCMP will storm the roof and take him down, Despereaux \"I'd love to, but I really have to go.\" and jumps off the building as he spreads his arms while wearing a wingsuit.","\n","^After he jumps off, everyone else comes up to the roof in unfortunate timing, just missing Despereaux. You try to convince them that Despereaux was here and jumped off, but no one believes you, making you look like a fool.","\n",{"->":"Restaurant"},{"#f":1}],"Restaurant":["^You walk into a nice, romantic, restaurant with Gus, but as you approach your table, you see Despereaux sitting there, he waves you to come and sit down. He says, \"Since I've taken the time to find you, please, don't spoil the mood with rudeness, take a seat.\" He congratulates you as you are one of the closest people to catching him, but he says you are way out of your league. So, he lays out his plans directly to you \"MANET....FOOLISH.... KING\" on the back of a business card.","\n","^You and Gus get distracted by a flaming baked Alaskan Salmon, allowing Despereaux enough time to escape your sights.","\n",{"->":"Station"},{"#f":1}],"Station":[["^At the police station, you tell everyone how you see a Man...et you see the painter, ______ ____.","\n",["ev",{"^->":"Station.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^John Manet",{"->":"$r","var":true},null]}],"ev","str","^Édouard Manet","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["ev",{"^->":"Station.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"GusCorrection"},{"#f":5}],"c-1":["\n",{"->":"MovingOn"},{"#f":5}]}],{"#f":1}],"GusCorrection":["^Gus interjects, \"Édouard.\"","\n",{"->":"MovingOn"},{"#f":1}],"MovingOn":["^You ask them where one would find a \"Édouard\" Manet. Because you feel like he will steal one tonight.","\n",{"->":"Yacht"},{"#f":1}],"Yacht":["^You and the police set up around the yacht where the Manet is held, you have been waiting for hours, when Lassiter notices a shadow, correction, a person, near the boat.","\n",{"->":"Approach"},{"#f":1}],"Approach":[["ev","str","^Approach the man","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Don't approach the man","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Approaches"},{"#f":5}],"c-1":["\n",{"->":"DoesntApproach"},{"#f":5}]}],{"#f":1}],"Approaches":["^You tell the police to approach the man and as you come up you see the man is not Despereaux.","\n",{"->":"Manet"},{"#f":1}],"DoesntApproach":["^You do not approach the man and let him leave, seeing as he is not Despereaux.","\n",{"->":"Manet"},{"#f":1}],"Manet":["^You get closer to the boat and realize that the Manet has already been stolen and switched to a clown painting.","\n",{"->":"Carriage"},{"#f":1}],"Carriage":["^You talk with Gus about how he told us exactly what he was going to steal, where he was going to steal it, and when he was going to be there, and we still could not catch him. Gus ignores you and asks why we are on a carriage ride, at night, saying it is \"oddly romantic.\" You deny it, saying what better way is there for a couple of best buddies to take in the stars, the driver then says, \"let me know when you want to go to the kissing bridge.\" Gus realizes this whole tripped was planned for you and your girlfriend Abigail, he gets mad as he was an after-thought, he kicks you out of the carriage.","\n","^After being kicked out of the carriage and talking with yourself, you see the apartment complex Despereaux jumped off, he said he was \"going to his room\", meaning his building must be tall and close enough to where the burglary happened.","\n","^After process of elimination, you walk into an expensive hotel, saying \"Hello Bertrand\" to the hotel clerk that you lost your key, he asks what your name is.","\n",{"->":"NameRoom"},{"#f":1}],"NameRoom":[["ev","str","^Pierre Despereaux","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Wrong"},{"#f":5}]}],{"#f":1}],"Wrong":[[["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^You are told that there are no rooms under that name, you remember Lassiter saying that Despereaux registers in hotels under aliases of famous artists. You tell Bertrand that you register under a lot of different aliases to protect your privacy.",{"->":".^.^.23"},null],"s1":["pop","^\"Nothing?\" You say.",{"->":".^.^.23"},null],"s2":["pop",{"->":".^.^.23"},null],"#f":5}],"\n","ev","str","^John Van Gogh","/str",{"CNT?":".^.^"},"/ev",{"*":".^.c-0","flg":21},"ev","str","^Jacques Hockneystein-stine","/str",{"CNT?":".^.^"},"/ev",{"*":".^.c-1","flg":21},{"c-0":["\n",{"->":"Wrong"},{"#f":5}],"c-1":["\n",{"->":"Suspicious"},{"#f":5}]}],{"#f":1}],"NameRoom2":[["ev","str","^John Van Gogh","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Jacques Hockneystein-stine","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"JohnVan"},{"#f":5}],"c-1":["\n",{"->":"Jacques"},{"#f":5}]}],{"#f":1}],"JohnVan":[["^\"Nothing?\" You say.","\n","ev","str","^Jacques Hockneystein-stine","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Suspicious"},{"#f":5}]}],{"#f":1}],"Jacques":[["^\"Nothing?\" You say.","\n","ev","str","^John Van Gogh","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Suspicious"},{"#f":5}]}],{"#f":1}],"Suspicious":["^Bertrand says \"I don't know what shenanigans you are up to, but I do not like it and don't appreciate it.\" While he says this you see a name in the reflection of his glasses.","\n","^It might have been _____ _____, 12th floor.","\n",{"->":"Reflection"},{"#f":1}],"Reflection":[["ev","str","^Edgar Degas","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Correct"},{"#f":5}]}],{"#f":1}],"Correct":["^You get the name correct at Bertrand's astonishment, giving you the key after you distract him from asking any questions with a story.","\n",{"->":"Room"},{"#f":1}],"Room":["^You go up to Despereaux's room and call Gus, telling him where you are. You tell him you are going to rifle through all his stuff and then pull a \"John Turturro\" from <i>Miller's Crossing</i> on him. You sit down, saying you will wait for him to get back, click on the lamp, and scare him. Gus asks him if he remembered how that movie ended.","\n","^Right when Gus finished that sentence, Despereaux turns a lamp on, scaring you half to death. You tell Gus that Despereaux is there, and you hang up. You stand up, telling him that this is a misunderstanding and that his place looks exactly like the one he has. Despereaux tells you to \"Sit.\" He says that \"he was never a fan of <i>Miller's Crossing</i>, as there is too much gore and violence.\" He wishes he could stay and chat with you, but he must move on, he grabs something from the closet","\n",{"->":"Fight"},{"#f":1}],"Fight":[["ev","str","^Charge at him","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Clutch a pillow in fear that he grabbed his gun","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Death"},{"#f":5}],"c-1":["\n",{"->":"Pillow"},{"#f":5}]}],{"#f":1}],"Death":["^You attempt to charge at him to tackle and arrest him. Your attempt is futile. He reacts to you charging at him and shoots you, saying \"Now why did you have to do that, you know I don't like senseless murder.\"","\n","^You lie there, thinking of what you could have done differently, then you start to think of your loved ones, what you want to say to them, what you want to do with them, then your thoughts start to move towards what you want to say, all you can muster is, \"Tell Gus, I'm sorry.\"","\n","^You died","\n","end",{"#f":1}],"Pillow":["^You grab the closest pillow to you; afraid he will silence you. He says to you, \"You thought my Marco Ciccone loafers were a gun? No, no, no, no, Mr. Spencer, this is my gun, you see?\" as he pulls out a Walther P99 (Two-tone). You are left speechless, he asks \"what, you think I'm going to kill you?\", you answer no. He tells you, \"You're right, not yet, anyway.\" He tells you that you can leave now, never turning away from you.","\n",{"->":"Fight2"},{"#f":1}],"Fight2":[["ev","str","^Charge at him trying to move his gun out of the way","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Just walk away","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Death"},{"#f":5}],"c-1":["\n",{"->":"Talk"},{"#f":5}]}],{"#f":1}],"Talk":["^Lassiter tries to tell you that he is done and is heading for the border, you try to convince him that he will steal one more thing but cannot come up with what he will steal. In an attempt to convince them, you tell them you spoke to him last night, you mean, had a vision of him last night, packing his things, but you see that his dry cleaning does not come in until Tuesday, meaning he can't be leaving today, on Monday. Juliet then says, \"So you had a vision of him, faking something to you?\" They go on to the jet that is registered under one of his aliases.","\n",{"->":"Crown"},{"#f":1}],"Crown":["^You go off on your own to the police station, seeing Mackintosh, the same officer you saw the first day, asking for his book of everything that Despereaux might steal. As you go through his binder, you see an item in particular, a crown, a Monarch Butterfly Crown, you remember his list, \"MANET....FOOLISH.... KING\" you realize that this is the next item he will steal. You ask the officer about the place it is being held at and its security system. He says he helped set it up, so you ask him if he wants to solve a robbery.","\n",{"->":"Gallery"},{"#f":1}],"Gallery":["^You go to the gallery with Gus and Mackintosh after it's closed and wait for the gallery owner to leave, he looks around suspiciously while carrying out a suitcase. You tell Gus that it is time to break in and get to the crown before Despereaux. You told Mackintosh to shut down the security system, as he was one of the people who helped set it up, while you and Gus break in to relocate the crown. As you make your way over to where the crown is being held, you see it surrounded by a metal box, inside bulletproof glass, and surrounding all of that is a laser security system.","\n","^You convince Gus that he is the only one that can do this and that we can't turn back. You guide him through the lasers, so he does not touch any of them. As he gets through the last one, you congratulate him and start clapping, as you do that, you walk through all the lasers, as the officer already disabled the alarm system. Gus gets mad at you once again. You say walk up to the display box and tell Gus that this alarm has been disabled, so this is the easy part. Right as you touch the glass box, the alarm blares.","\n","^Within seconds the police are already there and have guns pointed at you. You and Gus end up back at the station and you called your father, he came to British Colombia and posted both of your bails.","\n","^You leave the building and see Mackintosh with his things packed, unlocking his bike, you ask him what happened, he told you that he was fired, but it would have been a suspension, but the crown ended up going missing. When the police opened the case, the crown was gone.","\n",{"->":"Realization1"},{"#f":1}],"Realization1":[["ev","str","^He does not steal anything","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^He is the greatest thief that ever lived","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"InsuranceFraud"},{"#f":5}],"c-1":["\n",{"->":"GreatestThief"},{"#f":5}]}],{"#f":1}],"GreatestThief":["^He gets away with everything and you believe that he is the greatest thief that ever lived.","\n","end",{"#f":1}],"InsuranceFraud":["^You say that that would be impossible, as right when the box closed, when the owner closed and left the gallery, you and Gus broke in, saw the box, and then the police were there, meaning there was no time for Despereaux to steal the crown. You come to a realization.","\n",{"->":"Jet"},{"#f":1}],"Jet":[["ev","str","^Go alone to the jet","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Call for backup when you go to the jet","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Alone"},{"#f":5}],"c-1":["\n",{"->":"Backup"},{"#f":5}]}],{"#f":1}],"Backup":["^The only way Despereaux could have had the crown, was if he had it all along. You exclaim, \"Oh, I know why Despereaux never gets caught! Because he doesn't steal anything!\" You run off to where his jet is with Gus and the police.","\n","^He tells you \"Mr. Spencer. You have an impressive learning curve. I am no longer amused.\" But you start telling him how he gave you too much time with the crown, as you covered all the bases for the crown and that you are disappointed in the fact that all he does is help them commit insurance fraud. \"The owners were having money troubled, handed the items to you, and you left your 'calling card'\" He says \"Now I feel like I have to hurt you, which saddens me.\" You say, \"I thought you were a master criminal.\" Despereaux replies, \"The genius of my plan is in its simplicity. Perhaps it's not as sexy as you believed. But don't forget, I got away with it.\" \"No, you didn't\" as the police swarm in and Lassiter is the one to take his gun and arrest him.","\n",{"->":"GoodEnding"},{"#f":1}],"Alone":[["^The only way he could steal these pieces of art was if he was just handed them by their owners.","\n","^You run off to his jet, with no one following you.","\n","^You get to his private jet, he tells you that you have an impressive learning curve, but you are disappointed in the fact that all he does is help them commit insurance fraud. \"The owners were having money troubled, handed the items to you, and you left your 'calling card'\" He says \"Now I feel like I have to hurt you, which saddens me.\" You say, \"I thought you were a master criminal.\" Despereaux replies, \"The genius of my plan is in its simplicity. Perhaps it's not as sexy as you believed. But don't forget, I got away with it.\" \"No, you didn't\" you say.","\n","ev","str","^Charge at him","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Death"},{"#f":5}]}],{"#f":1}],"GoodEnding":[["^As Despereaux is being walked off by the officers in cuffs, he turns back to look at you, \"Mr. Spencer. I've often fantasized about escaping from prison, you know.\"","\n","^You caught a thief, which means your trip was fully paid for as a business expense.","\n","ev",{"CNT?":"Approach"},{"CNT?":"GusCorrection"},"&&",{"CNT?":"Realization"},"&&","/ev",{"*":".^.c-0","flg":9},{"c-0":[{"->":"TrueEnding"},"\n",{"#f":5}]}],{"#f":1}],"TrueEnding":["^(True Ending, you followed the events of the episode)","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};