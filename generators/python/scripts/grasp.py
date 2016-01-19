import rospy

from sr_robot_commander.sr_hand_commander import SrHandCommander
rospy.init_node("grasp", anonymous=True)


hand_commander = SrHandCommander(hand_parameters=hand_parameters,
                                 hand_serial=hand_serial)

trajectory = [
    {
        'name': dropdown_grasp,
        'interpolate_time': time,
        'pause_time': pause
    }
]

# Run trajectory via moveit
hand_commander.run_named_trajectory(trajectory)