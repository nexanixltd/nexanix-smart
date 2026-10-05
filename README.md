# Nexanix Smart Assistant

A simulated Alexa+ web experience for the Build, Ship, Shape: Amazon Developer Hackathon.

## What is actually implemented
The browser runs a local agent runtime in JavaScript. The agent interprets natural-language requests and **executes stateful tools**:

- `add_to_shopping_list`
- `schedule_calendar_event`
- `get_calendar`
- `create_home_routine`
- `get_shopping_list`

Tool results update the live application state. A later request can read the state created by an earlier request.

## Alexa+ track
This project uses the hackathon's **simulated Alexa+ experience** path. The official rules allow a web app built with any AI or agentic tool and do not require Alexa+ private SDKs, MCP, or voice input for this path.

## Run
No API key or external service is required. Open `index.html` in a modern browser. The complete agent logic and stateful tools run in the browser.

## Demo
1. Ask: `Prepare movie night for Friday at 8`.
2. Observe three executed tools and the updated calendar/shopping state.
3. Ask: `What's on my calendar?` and observe the state persisted from the first request.
4. Ask: `Add popcorn to my shopping list` and observe the shopping state update.

## Limitations
The tools use synthetic local data. They do not control a real calendar, shopping service, or smart-home device. The experience is intentionally presented as a simulation, consistent with the hackathon's simulated Alexa+ option.
