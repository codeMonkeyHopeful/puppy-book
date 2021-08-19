from . import utils

init_count = 0

while init_count < 1:
    # only do this when NOT in prod
    message = utils.initial_startup()
    print(f"Startup status: {message}")
    init_count += 1
