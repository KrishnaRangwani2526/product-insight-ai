# Working product photo and AI labelling

## Scope
- Replace the current template with the shared `audio-business-ally` project while preserving its existing appearance and flows.
- Change only the Add Product photo workflow and the small shared helpers required by it.

## Implementation
- Make **Take Photo** request the device camera and make **Upload Photo** open the device file picker.
- Preview the selected image, allow replacement, validate that it is an image, and keep the current sample/product-image behavior elsewhere unchanged.
- Send the selected image to a server-side Lovable AI call for visual product analysis.
- Return structured labelled fields such as product name, category, material, colour, size/visual details, description, and search keywords.
- Populate the existing product form and listing preview with the AI result while leaving every field editable before saving.
- Show the existing progress and notification styles for analysis, permission cancellation, unsupported files, and AI errors.

## Data behavior
- Continue using the app's current browser-only product storage for now; no database will be added.
- Add `database_info.txt` describing the future database connection, tables/fields, image storage, ownership rules, and where AI-labelled product records must be saved once a database is connected.

## Verification
- Check camera/upload controls, image preview and replacement, AI-labelled form population, manual edits, and product save navigation.
- Verify the project compiles and test the flow in the running preview without changing unrelated pages or styling.

## Technical details
- Use separate file inputs with `accept="image/*"`; the camera input also uses `capture="environment"` so supported phones open the rear camera.
- Keep the AI key and model request on the server, validate both input and structured output, and surface gateway error messages without exposing secrets.
- Use the existing TanStack Start routes, components, tokens, and local state conventions.
