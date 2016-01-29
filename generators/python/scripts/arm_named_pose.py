
if side == 'right':
    dropdown_named_pose = 'ra_' + dropdown_named_pose
else:
    dropdown_named_pose = 'la_' + dropdown_named_pose

trajectory = [
    {
        'name': dropdown_named_pose,
        'interpolate_time': time,
        'pause_time': pause
    }
]

# Run trajectory via moveit
arm_commander.run_named_trajectory(trajectory)

