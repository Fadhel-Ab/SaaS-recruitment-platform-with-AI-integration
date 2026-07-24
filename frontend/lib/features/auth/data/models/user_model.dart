import 'package:frontend/features/auth/data/models/user_role.dart';

class UserModel {
  final String id;
  final String email;
  final UserRole role;

  UserModel({required this.id, required this.email, required this.role});

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['id'],
      email: json['email'],
      role: json['role'] == 'MANAGER' ? UserRole.manager : UserRole.candidate,
    );
  }
}
