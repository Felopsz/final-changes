Removed all project UI rendering:
- Excluded the Projects tab and related admin menu items from dashboard template.
- Deleted the Projects section markup (carousel and details) from the dashboard.
- Stubbed project rendering in `app/ui.js` so no project data is displayed.
This change ensures the dashboard no longer shows the projects area.
