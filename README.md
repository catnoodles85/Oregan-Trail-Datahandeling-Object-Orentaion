this is a single script oregan trail game. 

the script will flow as follows:

user will click the start button then it will disapear and start the game.
two wagon options will displayed.
user will choose between a regular wagon or a delux wagon that holds four pasangers. they will disapear and the wagon they choose will de displayed
then two options for passangers will apear. a hunter or a doctor
they will choose from the two and they will be displayed with stats. health, eating, food supply hunting or healing (depending on if they are a hunter or a doctor)
the first in game message will say the hunter will need to be healed.
user will heal the hunter.
then the doctors health will go down because he needs to eat and the user will have to feed the doctor with food using the eat button.
then the food supply will go down and the user will have to hunt for food with the hunter.
then the game will end with you all died of disentary the end. lol.

1. the start game button pressed. disapears.
2. welcome message in the cardMessage/messageBox box apears."Welcome to the game ${traveler.name}. choose your wagon partner!"
3. then two wagon cards show up.
4. user selects either a regular wagon (holds only 2) or a delux wagon(holds on 4). construtors added to the wagon. one wagon disapears.
5. user sees the capacity of the selected wagon in the card and updates when passangers are added. call them seats. keep wagon and passenger cards in the center. game cannot progress until all passangers are added. 
6. doctor card and hunter card apear with stats at the bottom and updates during actions (health, abilities, and food) and eat and hunt buttons.
7. passangers are added to the wagon and new cards are created and remain at the bottom of the wagon when add Doctor to party or Hunter to party buttons clicked. 
8. if too many passagers added cardMessage/messageBOX : unfortunalty, ${traveler.name}, this wagons full partner!
9. to do list:
 - hide the passenger cards. 
 - make the wagon not selected disapear on select button add innertext from the objects stats??? stats show once clicked and card centers. place text in paragraph tag?
 - make passenger cards apear next to the wagon selected. 
 - make a create new card function. called on the add hunter/doctor button. apear at the bottom of wagon.
 - create buttons for eat, heal, hunt with executed functions that update health. show food supply and update it. hunter hunts and eats. doctor heals and eats (heals with food supply) 
 - 