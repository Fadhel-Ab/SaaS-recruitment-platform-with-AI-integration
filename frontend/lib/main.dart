import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/core/storage/secure_token_storage.dart';
import 'package:frontend/core/storage/web_token_storage.dart';
import 'package:frontend/features/auth/bloc/auth_event.dart';

import 'app/app.dart';

import 'core/api/dio_client.dart';

import 'features/auth/data/auth_api.dart';
import 'features/auth/data/auth_repository.dart';
import 'features/auth/bloc/auth_bloc.dart';

void main() {
  final dioClient = DioClient();

  final tokenStorage = kIsWeb ? WebTokenStorage() : SecureTokenStorage();

  final authApi = AuthApi(dioClient.dio);

  final authRepository = AuthRepository(authApi, tokenStorage);

  runApp(
    RepositoryProvider.value(
      value: authRepository,

      child: BlocProvider(
        create: (_) =>
            AuthBloc(authRepository, tokenStorage)..add(const AuthStarted()),

        child: const RecruitmentApp(),
      ),
    ),
  );
}
