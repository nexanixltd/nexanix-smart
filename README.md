# Nexanix Smart Assistant

A self-contained simulated Alexa+ web experience for the Build, Ship, Shape: Amazon Developer Hackathon.

## What it demonstrates
A conversational agentic-style home/personal workflow. Natural-language requests are routed to local tools:
- `get_calendar`
- `add_to_shopping_list`
- `create_home_routine`
- `schedule_calendar_event`

The UI shows the request, response, and tool calls.

## Alexa+ track approach
This uses the **simulated Alexa+ experience** path. It does not claim to call Amazon's private Alexa+ developer services. The hackathon rules allow a simulated Alexa+ web experience using a preferred agentic tool.

## Run
Open `index.html` in a browser, or run:
`python3 -m http.server 8000`
then open `http://localhost:8000`.

## Demo
Try: “Prepare movie night for Friday at 8”, then “What's on my calendar today?” and “Add popcorn to my shopping list”.

## Important
This is a simulation using synthetic/local data. It does not control real devices or external services. Describe it honestly as a simulated Alexa+ experience.
