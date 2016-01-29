import rospy
import geometry_msgs.msg

if dropdown_commander == 'arm_commander':
    from sr_robot_commander.sr_arm_commander import SrArmCommander
    arm_commander = SrArmCommander(set_ground=False)
else:
    from sr_robot_commander.sr_hand_commander import SrHandCommander
    hand_commander = SrHandCommander(name=side + "_hand")
