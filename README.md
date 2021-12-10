# Notes

once `startproject`, use `manage.py` instead of django-admin

then create an app with `python manage.py startapp playground`
- add the name of the app ('playground') to `settings.py`

*Debugging*
- create launch.json file: open `views.py` > click 'run and debug' in VScode > 
- put breakpoint in code
- then start debug
- navigate to relevant page for debug (will 404 in browser for homepage since it's only listening to file you are debugging)
- bow you can step through lines
    - look at particular variables by adding them to 'WATCH'
- run with or without debugging with F5 shortcuts

*Coding tools*
- `$ pipenv install django-debug-toolbar` > follow [installation](https://django-debug-toolbar.readthedocs.io/en/latest/installation.html)
    - includes middleware
    - make sure to have right HTML tags for toolbar to pop up