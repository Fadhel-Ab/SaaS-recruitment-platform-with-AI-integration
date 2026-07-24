import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'token_storage.dart';

class SecureTokenStorage implements TokenStorage {
  final FlutterSecureStorage storage = const FlutterSecureStorage();

  @override
  Future<void> saveToken(String token) {
    return storage.write(key: 'access_token', value: token);
  }

  @override
  Future<String?> getToken() {
    return storage.read(key: 'access_token');
  }

  @override
  Future<void> clear() {
    return storage.delete(key: 'access_token');
  }
}
